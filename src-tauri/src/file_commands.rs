use crate::platform_error::PlatformError;
use crate::project_path_scope::ProjectPathScope;
use atomicwrites::{AllowOverwrite, AtomicFile};
use std::fs;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::sync::Mutex;
use tauri::ipc::Response;
use tauri::State;

const MAX_FILE_SIZE: u64 = 268_435_456;
static WRITE_LOCK: Mutex<()> = Mutex::new(());

fn validate_size(size: u64) -> Result<(), PlatformError> {
    if size > MAX_FILE_SIZE {
        return Err(PlatformError::too_large(format!(
            "File size {size} exceeds the 256 MiB limit"
        )));
    }
    Ok(())
}

fn atomic_write(path: &Path, data: &[u8]) -> Result<(), PlatformError> {
    let _guard = WRITE_LOCK
        .lock()
        .map_err(|error| PlatformError::internal(error.to_string()))?;
    let parent = path
        .parent()
        .ok_or_else(|| PlatformError::invalid_path("Output path has no parent"))?;
    fs::create_dir_all(parent).map_err(|error| PlatformError::io(error.to_string()))?;
    AtomicFile::new(path, AllowOverwrite)
        .write(|file| file.write_all(data))
        .map_err(|error| PlatformError::io(error.to_string()))
}

async fn run_blocking<T, F>(operation: F) -> Result<T, PlatformError>
where
    T: Send + 'static,
    F: FnOnce() -> Result<T, PlatformError> + Send + 'static,
{
    tauri::async_runtime::spawn_blocking(operation)
        .await
        .map_err(|error| PlatformError::internal(error.to_string()))?
}

#[tauri::command]
pub async fn read_file_text(
    path: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<String, PlatformError> {
    let resolved = scope.resolve_existing(&path)?;
    run_blocking(move || {
        let metadata =
            fs::metadata(&resolved).map_err(|error| PlatformError::io(error.to_string()))?;
        validate_size(metadata.len())?;
        fs::read_to_string(resolved).map_err(|error| PlatformError::io(error.to_string()))
    })
    .await
}

#[tauri::command]
pub async fn read_file_binary(
    path: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<Response, PlatformError> {
    let resolved = scope.resolve_existing(&path)?;
    let data = run_blocking(move || {
        let metadata =
            fs::metadata(&resolved).map_err(|error| PlatformError::io(error.to_string()))?;
        validate_size(metadata.len())?;
        fs::read(resolved).map_err(|error| PlatformError::io(error.to_string()))
    })
    .await?;
    Ok(Response::new(data))
}

#[tauri::command]
pub async fn write_file_text(
    path: String,
    content: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<(), PlatformError> {
    validate_size(content.len() as u64)?;
    let resolved = scope.resolve_for_write(&path)?;
    run_blocking(move || atomic_write(&resolved, content.as_bytes())).await
}

#[tauri::command]
pub async fn write_file_binary(
    path: String,
    data: Vec<u8>,
    scope: State<'_, ProjectPathScope>,
) -> Result<(), PlatformError> {
    validate_size(data.len() as u64)?;
    let resolved = scope.resolve_for_write(&path)?;
    run_blocking(move || atomic_write(&resolved, &data)).await
}

#[tauri::command]
pub fn file_exists(
    path: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<bool, PlatformError> {
    match scope.resolve_existing(&path) {
        Ok(_) => Ok(true),
        Err(error) if error.code == "NOT_FOUND" => Ok(false),
        Err(error) => Err(error),
    }
}

#[tauri::command]
pub async fn create_dir_all(
    path: String,
    scope: State<'_, ProjectPathScope>,
) -> Result<(), PlatformError> {
    let resolved = scope.resolve_for_write(&path)?;
    run_blocking(move || {
        fs::create_dir_all(resolved).map_err(|error| PlatformError::io(error.to_string()))
    })
    .await
}

pub fn write_internal_file(path: PathBuf, data: Vec<u8>) -> Result<(), PlatformError> {
    validate_size(data.len() as u64)?;
    atomic_write(&path, &data)
}

#[cfg(test)]
mod tests {
    use super::{atomic_write, validate_size, MAX_FILE_SIZE};
    use std::fs;
    use std::sync::{Arc, Barrier};
    use std::thread;

    #[test]
    fn rejects_files_above_the_limit() {
        assert_eq!(
            validate_size(MAX_FILE_SIZE + 1).unwrap_err().code,
            "FILE_TOO_LARGE"
        );
        assert!(validate_size(MAX_FILE_SIZE).is_ok());
    }

    #[test]
    fn replaces_files_atomically() {
        let directory = std::env::temp_dir().join(format!("gamebob-atomic-{}", std::process::id()));
        fs::create_dir_all(&directory).unwrap();
        let path = directory.join("project.json");
        atomic_write(&path, b"first").unwrap();
        atomic_write(&path, b"second").unwrap();
        assert_eq!(fs::read_to_string(&path).unwrap(), "second");
        fs::remove_dir_all(directory).unwrap();
    }

    #[test]
    fn concurrent_writes_never_leave_partial_content() {
        let directory =
            std::env::temp_dir().join(format!("gamebob-concurrent-{}", std::process::id()));
        fs::create_dir_all(&directory).unwrap();
        let path = directory.join("atlas.json");
        let barrier = Arc::new(Barrier::new(8));
        let payloads = (0..8)
            .map(|index| format!("payload-{index}-{}", "x".repeat(32_768)))
            .collect::<Vec<_>>();
        let handles = payloads
            .iter()
            .cloned()
            .map(|payload| {
                let thread_path = path.clone();
                let thread_barrier = Arc::clone(&barrier);
                thread::spawn(move || {
                    thread_barrier.wait();
                    atomic_write(&thread_path, payload.as_bytes()).unwrap();
                })
            })
            .collect::<Vec<_>>();
        for handle in handles {
            handle.join().unwrap();
        }
        let result = fs::read_to_string(&path).unwrap();
        assert!(payloads.contains(&result));
        fs::remove_dir_all(directory).unwrap();
    }
}
