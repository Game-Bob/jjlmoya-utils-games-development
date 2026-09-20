use std::fs;
use std::path::Path;

#[tauri::command]
fn read_file_text(path: String) -> Result<String, String> {
    fs::read_to_string(&path).map_err(|e| e.to_string())
}

#[tauri::command]
fn read_file_binary(path: String) -> Result<Vec<u8>, String> {
    fs::read(&path).map_err(|e| e.to_string())
}

#[tauri::command]
fn write_file_text(path: String, content: String) -> Result<(), String> {
    if let Some(parent) = Path::new(&path).parent() {
        let _ = fs::create_dir_all(parent);
    }
    fs::write(&path, content).map_err(|e| e.to_string())
}

#[tauri::command]
fn write_file_binary(path: String, data: Vec<u8>) -> Result<(), String> {
    if let Some(parent) = Path::new(&path).parent() {
        let _ = fs::create_dir_all(parent);
    }
    fs::write(&path, data).map_err(|e| e.to_string())
}

#[tauri::command]
fn file_exists(path: String) -> bool {
    Path::new(&path).exists()
}

#[tauri::command]
fn create_dir_all(path: String) -> Result<(), String> {
    fs::create_dir_all(&path).map_err(|e| e.to_string())
}

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            read_file_text,
            read_file_binary,
            write_file_text,
            write_file_binary,
            file_exists,
            create_dir_all
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
