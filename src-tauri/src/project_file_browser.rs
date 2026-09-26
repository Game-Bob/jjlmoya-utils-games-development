use crate::platform_error::PlatformError;
use crate::project_path_scope::ProjectPathScope;
use serde::Serialize;
use std::fs;
use std::path::Path;
use tauri::State;

const MAX_ENTRIES: usize = 500;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ProjectFileEntry {
    name: String,
    path: String,
    is_directory: bool,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ProjectDirectoryListing {
    entries: Vec<ProjectFileEntry>,
    truncated: bool,
}

fn list_entries(directory: &Path) -> Result<ProjectDirectoryListing, PlatformError> {
    if !directory.is_dir() {
        return Err(PlatformError::invalid_path(
            "Project browser path must be a directory",
        ));
    }
    let mut entries = Vec::new();
    for entry in fs::read_dir(directory).map_err(|error| PlatformError::io(error.to_string()))? {
        let entry = entry.map_err(|error| PlatformError::io(error.to_string()))?;
        let file_type = entry
            .file_type()
            .map_err(|error| PlatformError::io(error.to_string()))?;
        if file_type.is_symlink() || (!file_type.is_dir() && !file_type.is_file()) {
            continue;
        }
        entries.push(ProjectFileEntry {
            name: entry.file_name().to_string_lossy().into_owned(),
            path: entry.path().to_string_lossy().into_owned(),
            is_directory: file_type.is_dir(),
        });
    }
    entries.sort_by(|left, right| {
        right
            .is_directory
            .cmp(&left.is_directory)
            .then_with(|| left.name.to_lowercase().cmp(&right.name.to_lowercase()))
    });
    let truncated = entries.len() > MAX_ENTRIES;
    entries.truncate(MAX_ENTRIES);
    Ok(ProjectDirectoryListing { entries, truncated })
}

#[tauri::command]
pub async fn list_project_directory(
    path: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<ProjectDirectoryListing, PlatformError> {
    let directory = scope.resolve_existing(&path)?;
    tauri::async_runtime::spawn_blocking(move || list_entries(&directory))
        .await
        .map_err(|error| PlatformError::internal(error.to_string()))?
}

#[cfg(test)]
mod tests {
    use super::list_entries;
    use crate::project_path_scope::ProjectPathScope;
    use std::fs;

    #[test]
    fn lists_project_children_and_rejects_paths_outside_the_selected_root() {
        let root = std::env::temp_dir().join(format!("gamebob-browser-{}", std::process::id()));
        let project = root.join("project");
        let outside = root.join("outside");
        fs::create_dir_all(project.join("sprites")).unwrap();
        fs::create_dir_all(&outside).unwrap();
        fs::write(project.join("atlas.png"), b"image").unwrap();
        let scope = ProjectPathScope::default();
        let authorized = scope.authorize(&project.to_string_lossy()).unwrap();

        let listing = list_entries(&authorized).unwrap();
        assert_eq!(listing.entries.len(), 2);
        assert_eq!(listing.entries[0].name, "sprites");
        assert!(listing.entries[0].is_directory);
        assert_eq!(listing.entries[1].name, "atlas.png");
        assert!(!listing.entries[1].is_directory);
        assert_eq!(
            scope
                .resolve_existing(&outside.to_string_lossy())
                .unwrap_err()
                .code,
            "PERMISSION_DENIED"
        );

        fs::remove_dir_all(root).unwrap();
    }
}
