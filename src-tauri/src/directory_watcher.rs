use crate::platform_error::PlatformError;
use crate::project_path_scope::ProjectPathScope;
use notify::{Event, EventKind, RecommendedWatcher, RecursiveMode, Watcher};
use serde::Serialize;
use std::collections::HashMap;
use std::path::{Component, Path, PathBuf};
use std::sync::Mutex;
use std::time::{SystemTime, UNIX_EPOCH};
use tauri::{AppHandle, Emitter, Runtime, State};

#[derive(Default)]
pub struct DirectoryWatcherManager {
    watchers: Mutex<HashMap<PathBuf, RecommendedWatcher>>,
}

#[derive(Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DirectoryChangePayload {
    root_path: String,
    event: DirectoryChangeEvent,
}

#[derive(Clone, Serialize)]
struct DirectoryChangeEvent {
    #[serde(rename = "type")]
    event_type: &'static str,
    path: String,
    timestamp: u128,
    #[serde(skip_serializing_if = "Option::is_none")]
    message: Option<String>,
}

fn event_type(kind: &EventKind) -> &'static str {
    match kind {
        EventKind::Create(_) => "created",
        EventKind::Modify(notify::event::ModifyKind::Name(_)) => "renamed",
        EventKind::Modify(_) => "modified",
        EventKind::Remove(_) => "deleted",
        _ => "modified",
    }
}

fn emit_event<R: Runtime>(app: &AppHandle<R>, root: &Path, event: Event) {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_millis())
        .unwrap_or_default();
    for changed_path in event.paths {
        let relative = changed_path.strip_prefix(root).unwrap_or(&changed_path);
        let payload = DirectoryChangePayload {
            root_path: root.to_string_lossy().into_owned(),
            event: DirectoryChangeEvent {
                event_type: event_type(&event.kind),
                path: relative.to_string_lossy().replace('\\', "/"),
                timestamp,
                message: None,
            },
        };
        let _ = app.emit("directory-change", payload);
    }
}

fn emit_error<R: Runtime>(app: &AppHandle<R>, root: &Path, error: notify::Error) {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_millis())
        .unwrap_or_default();
    let payload = DirectoryChangePayload {
        root_path: root.to_string_lossy().into_owned(),
        event: DirectoryChangeEvent {
            event_type: "error",
            path: String::new(),
            timestamp,
            message: Some(error.to_string()),
        },
    };
    let _ = app.emit("directory-change", payload);
}

#[tauri::command]
pub fn watch_directory<R: Runtime>(
    path: String,
    app: AppHandle<R>,
    scope: State<'_, ProjectPathScope>,
    manager: State<'_, DirectoryWatcherManager>,
) -> Result<(), PlatformError> {
    let root = scope.resolve_existing(&path)?;
    if !root.is_dir() {
        return Err(PlatformError::invalid_path(
            "Watcher path must be a directory",
        ));
    }
    let mut watchers = manager
        .watchers
        .lock()
        .map_err(|_| PlatformError::internal("Watcher lock is poisoned"))?;
    if watchers.contains_key(&root) {
        return Ok(());
    }
    let event_root = root.clone();
    let event_app = app.clone();
    let mut watcher = notify::recommended_watcher(move |result| match result {
        Ok(event) => emit_event(&event_app, &event_root, event),
        Err(error) => emit_error(&event_app, &event_root, error),
    })
    .map_err(|error| PlatformError::watcher(error.to_string()))?;
    watcher
        .watch(&root, RecursiveMode::Recursive)
        .map_err(|error| PlatformError::watcher(error.to_string()))?;
    watchers.insert(root, watcher);
    Ok(())
}

#[tauri::command]
pub fn unwatch_directory(
    path: String,
    manager: State<'_, DirectoryWatcherManager>,
) -> Result<(), PlatformError> {
    let requested = PathBuf::from(path);
    if !requested.is_absolute()
        || requested
            .components()
            .any(|component| matches!(component, Component::ParentDir))
    {
        return Err(PlatformError::invalid_path("Watcher path must be absolute"));
    }
    let root = requested.canonicalize().unwrap_or(requested);
    manager
        .watchers
        .lock()
        .map_err(|_| PlatformError::internal("Watcher lock is poisoned"))?
        .remove(&root);
    Ok(())
}
