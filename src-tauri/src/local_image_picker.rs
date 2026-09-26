use crate::platform_error::PlatformError;
use serde::Serialize;
use std::fs::File;
use std::io::Read;
use std::path::PathBuf;
use tauri::{AppHandle, Runtime};
use tauri_plugin_dialog::DialogExt;

const MAX_IMAGE_BYTES: u64 = 67_108_864;

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalImageSelection {
    path: String,
    name: String,
    bytes: Vec<u8>,
}

#[tauri::command]
pub async fn pick_local_image<R: Runtime>(
    app: AppHandle<R>,
) -> Result<Option<LocalImageSelection>, PlatformError> {
    let selected = app
        .dialog()
        .file()
        .set_title("Choose a sprite image from this computer")
        .add_filter("Sprite images", &["png", "webp"])
        .blocking_pick_file();
    let Some(file_path) = selected else {
        return Ok(None);
    };
    let path = file_path
        .into_path()
        .map_err(|error| PlatformError::invalid_path(error.to_string()))?;
    tauri::async_runtime::spawn_blocking(move || read_selected_image(path))
        .await
        .map_err(|error| PlatformError::internal(error.to_string()))?
        .map(Some)
}

fn read_selected_image(path: PathBuf) -> Result<LocalImageSelection, PlatformError> {
    let canonical = path
        .canonicalize()
        .map_err(|error| PlatformError::io(error.to_string()))?;
    let file = File::open(&canonical).map_err(|error| PlatformError::io(error.to_string()))?;
    let metadata = file
        .metadata()
        .map_err(|error| PlatformError::io(error.to_string()))?;
    if !metadata.is_file() {
        return Err(PlatformError::invalid_path("Selected image must be a file"));
    }
    if metadata.len() > MAX_IMAGE_BYTES {
        return Err(PlatformError::too_large(
            "Sprite image exceeds the 64 MiB limit",
        ));
    }
    let mut bytes = Vec::with_capacity(metadata.len() as usize);
    file.take(MAX_IMAGE_BYTES + 1)
        .read_to_end(&mut bytes)
        .map_err(|error| PlatformError::io(error.to_string()))?;
    if bytes.len() as u64 > MAX_IMAGE_BYTES {
        return Err(PlatformError::too_large(
            "Sprite image exceeds the 64 MiB limit",
        ));
    }
    if !is_supported_image(&bytes) {
        return Err(PlatformError::invalid_path("Choose a PNG or WebP image"));
    }
    let name = canonical
        .file_name()
        .map(|value| value.to_string_lossy().into_owned())
        .ok_or_else(|| PlatformError::invalid_path("Selected image has no file name"))?;
    Ok(LocalImageSelection {
        path: canonical.to_string_lossy().into_owned(),
        name,
        bytes,
    })
}

fn is_supported_image(bytes: &[u8]) -> bool {
    bytes.starts_with(&[137, 80, 78, 71, 13, 10, 26, 10])
        || (bytes.len() >= 12 && &bytes[0..4] == b"RIFF" && &bytes[8..12] == b"WEBP")
}

#[cfg(test)]
mod tests {
    use super::{is_supported_image, read_selected_image};
    use std::fs;

    #[test]
    fn accepts_png_and_webp_signatures() {
        assert!(is_supported_image(&[137, 80, 78, 71, 13, 10, 26, 10]));
        assert!(is_supported_image(b"RIFF0000WEBP"));
        assert!(!is_supported_image(b"<svg></svg>"));
    }

    #[test]
    fn reads_only_supported_local_images() {
        let path = std::env::temp_dir().join(format!("gamebob-image-{}.png", std::process::id()));
        fs::write(&path, [137, 80, 78, 71, 13, 10, 26, 10]).unwrap();
        let selected = read_selected_image(path.clone()).unwrap();
        assert_eq!(selected.name, path.file_name().unwrap().to_string_lossy());
        assert_eq!(selected.bytes.len(), 8);
        fs::write(&path, b"not an image").unwrap();
        assert_eq!(
            read_selected_image(path.clone()).unwrap_err().code,
            "INVALID_PATH"
        );
        fs::remove_file(path).unwrap();
    }
}
