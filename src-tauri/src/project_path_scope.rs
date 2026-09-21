use crate::platform_error::PlatformError;
use std::collections::HashSet;
use std::path::{Component, Path, PathBuf};
use std::sync::Mutex;
use tauri::{AppHandle, Runtime, State};
use tauri_plugin_dialog::DialogExt;

#[derive(Default)]
pub struct ProjectPathScope {
    roots: Mutex<HashSet<PathBuf>>,
}

impl ProjectPathScope {
    pub fn authorize(&self, path: &str) -> Result<PathBuf, PlatformError> {
        let requested = Path::new(path);
        if !requested.is_absolute() {
            return Err(PlatformError::invalid_path("Project path must be absolute"));
        }
        let canonical = requested
            .canonicalize()
            .map_err(|error| PlatformError::invalid_path(error.to_string()))?;
        if !canonical.is_dir() {
            return Err(PlatformError::invalid_path(
                "Project path must be a directory",
            ));
        }
        let mut roots = self
            .roots
            .lock()
            .map_err(|_| PlatformError::internal("Project scope lock is poisoned"))?;
        roots.clear();
        roots.insert(canonical.clone());
        Ok(canonical)
    }

    pub fn resolve_existing(&self, path: &str) -> Result<PathBuf, PlatformError> {
        let requested = self.validate_absolute(path)?;
        let canonical = requested.canonicalize().map_err(|error| {
            if error.kind() == std::io::ErrorKind::NotFound {
                PlatformError::not_found(error.to_string())
            } else {
                PlatformError::io(error.to_string())
            }
        })?;
        self.ensure_authorized(&canonical)?;
        Ok(canonical)
    }

    pub fn resolve_for_write(&self, path: &str) -> Result<PathBuf, PlatformError> {
        let requested = self.validate_absolute(path)?;
        if requested.exists() {
            let canonical = requested
                .canonicalize()
                .map_err(|error| PlatformError::io(error.to_string()))?;
            self.ensure_authorized(&canonical)?;
            return Ok(canonical);
        }

        let mut ancestor = requested;
        while !ancestor.exists() {
            ancestor = ancestor
                .parent()
                .ok_or_else(|| PlatformError::invalid_path("Path has no existing ancestor"))?;
        }
        let canonical_ancestor = ancestor
            .canonicalize()
            .map_err(|error| PlatformError::io(error.to_string()))?;
        self.ensure_authorized(&canonical_ancestor)?;
        let relative = requested
            .strip_prefix(ancestor)
            .map_err(|_| PlatformError::invalid_path("Unable to resolve output path"))?;
        let resolved = canonical_ancestor.join(relative);
        self.ensure_authorized(&resolved)?;
        Ok(resolved)
    }

    fn validate_absolute<'a>(&self, path: &'a str) -> Result<&'a Path, PlatformError> {
        let requested = Path::new(path);
        if !requested.is_absolute() {
            return Err(PlatformError::invalid_path("Path must be absolute"));
        }
        if requested
            .components()
            .any(|component| matches!(component, Component::ParentDir))
        {
            return Err(PlatformError::invalid_path(
                "Parent traversal is not allowed",
            ));
        }
        Ok(requested)
    }

    fn ensure_authorized(&self, path: &Path) -> Result<(), PlatformError> {
        let roots = self
            .roots
            .lock()
            .map_err(|_| PlatformError::internal("Project scope lock is poisoned"))?;
        if roots.iter().any(|root| path.starts_with(root)) {
            return Ok(());
        }
        Err(PlatformError::permission_denied(
            "Path is outside every authorized project root",
        ))
    }
}

#[tauri::command]
pub async fn select_project_root<R: Runtime>(
    app: AppHandle<R>,
    title: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<Option<String>, PlatformError> {
    let selected = app.dialog().file().set_title(title).blocking_pick_folder();
    let Some(file_path) = selected else {
        return Ok(None);
    };
    let path = file_path
        .into_path()
        .map_err(|error| PlatformError::invalid_path(error.to_string()))?;
    scope
        .authorize(&path.to_string_lossy())
        .map(|resolved| Some(resolved.to_string_lossy().into_owned()))
}

#[cfg(test)]
mod tests {
    use super::ProjectPathScope;
    use std::fs;
    use std::path::Path;

    #[cfg(unix)]
    fn create_directory_link(target: &Path, link: &Path) -> std::io::Result<()> {
        std::os::unix::fs::symlink(target, link)
    }

    #[cfg(windows)]
    fn create_directory_link(target: &Path, link: &Path) -> std::io::Result<()> {
        std::os::windows::fs::symlink_dir(target, link)
    }

    #[test]
    fn rejects_relative_and_traversal_paths() {
        let scope = ProjectPathScope::default();
        assert_eq!(
            scope
                .resolve_for_write("relative/file.txt")
                .unwrap_err()
                .code,
            "INVALID_PATH"
        );
        let traversal = std::env::temp_dir()
            .join("scope")
            .join("..")
            .join("outside.txt");
        assert_eq!(
            scope
                .resolve_for_write(&traversal.to_string_lossy())
                .unwrap_err()
                .code,
            "INVALID_PATH"
        );
    }

    #[test]
    fn restricts_paths_to_authorized_roots() {
        let root = std::env::temp_dir().join(format!("gamebob-scope-{}", std::process::id()));
        fs::create_dir_all(&root).unwrap();
        let scope = ProjectPathScope::default();
        scope.authorize(&root.to_string_lossy()).unwrap();
        let allowed = root.join("assets").join("atlas.png");
        assert!(scope.resolve_for_write(&allowed.to_string_lossy()).is_ok());
        let denied = std::env::temp_dir().join("outside-gamebob-scope.txt");
        assert_eq!(
            scope
                .resolve_for_write(&denied.to_string_lossy())
                .unwrap_err()
                .code,
            "PERMISSION_DENIED"
        );
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn revokes_the_previous_project_when_a_new_root_is_selected() {
        let base = std::env::temp_dir().join(format!("gamebob-roots-{}", std::process::id()));
        let first = base.join("first");
        let second = base.join("second");
        fs::create_dir_all(&first).unwrap();
        fs::create_dir_all(&second).unwrap();
        let scope = ProjectPathScope::default();
        scope.authorize(&first.to_string_lossy()).unwrap();
        scope.authorize(&second.to_string_lossy()).unwrap();
        assert_eq!(
            scope
                .resolve_for_write(&first.join("old.txt").to_string_lossy())
                .unwrap_err()
                .code,
            "PERMISSION_DENIED"
        );
        assert!(scope
            .resolve_for_write(&second.join("current.txt").to_string_lossy())
            .is_ok());
        fs::remove_dir_all(base).unwrap();
    }

    #[test]
    fn rejects_symbolic_links_that_escape_the_project_root() {
        let base = std::env::temp_dir().join(format!("gamebob-link-{}", std::process::id()));
        let root = base.join("project");
        let outside = base.join("outside");
        fs::create_dir_all(&root).unwrap();
        fs::create_dir_all(&outside).unwrap();
        fs::write(outside.join("secret.txt"), "secret").unwrap();
        if let Err(error) = create_directory_link(&outside, &root.join("escape")) {
            if cfg!(windows) && error.raw_os_error() == Some(1314) {
                fs::remove_dir_all(base).unwrap();
                return;
            }
            panic!("Unable to create security-test link: {error}");
        }
        let scope = ProjectPathScope::default();
        scope.authorize(&root.to_string_lossy()).unwrap();
        assert_eq!(
            scope
                .resolve_existing(&root.join("escape/secret.txt").to_string_lossy())
                .unwrap_err()
                .code,
            "PERMISSION_DENIED"
        );
        fs::remove_dir_all(base).unwrap();
    }
}
