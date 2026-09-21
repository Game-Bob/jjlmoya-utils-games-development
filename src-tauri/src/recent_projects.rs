use crate::file_commands::write_internal_file;
use crate::platform_error::PlatformError;
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager, Runtime};

fn recents_path<R: Runtime>(app: &AppHandle<R>) -> Result<PathBuf, PlatformError> {
    app.path()
        .app_data_dir()
        .map(|directory| directory.join("recent-projects.json"))
        .map_err(|error| PlatformError::internal(error.to_string()))
}

#[tauri::command]
pub async fn read_recent_projects<R: Runtime>(app: AppHandle<R>) -> Result<String, PlatformError> {
    let path = recents_path(&app)?;
    tauri::async_runtime::spawn_blocking(move || {
        if !path.exists() {
            return Ok("[]".to_string());
        }
        fs::read_to_string(path).map_err(|error| PlatformError::io(error.to_string()))
    })
    .await
    .map_err(|error| PlatformError::internal(error.to_string()))?
}

#[tauri::command]
pub async fn write_recent_projects<R: Runtime>(
    app: AppHandle<R>,
    content: String,
) -> Result<(), PlatformError> {
    let path = recents_path(&app)?;
    tauri::async_runtime::spawn_blocking(move || write_internal_file(path, content.into_bytes()))
        .await
        .map_err(|error| PlatformError::internal(error.to_string()))?
}

#[tauri::command]
pub async fn clear_recent_projects<R: Runtime>(app: AppHandle<R>) -> Result<(), PlatformError> {
    write_recent_projects(app, "[]".to_string()).await
}
