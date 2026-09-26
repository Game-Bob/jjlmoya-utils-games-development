#![allow(linker_messages)]

mod directory_watcher;
mod file_commands;
mod local_image_picker;
mod platform_error;
mod project_path_scope;
mod recent_projects;

use directory_watcher::{unwatch_directory, watch_directory, DirectoryWatcherManager};
use file_commands::{
    create_dir_all, file_exists, read_file_binary, read_file_text, write_file_binary,
    write_file_text,
};
use local_image_picker::pick_local_image;
use project_path_scope::{select_project_root, ProjectPathScope};
use recent_projects::{clear_recent_projects, read_recent_projects, write_recent_projects};

fn configure<R: tauri::Runtime>(builder: tauri::Builder<R>) -> tauri::Builder<R> {
    builder
        .plugin(tauri_plugin_dialog::init())
        .manage(ProjectPathScope::default())
        .manage(DirectoryWatcherManager::default())
        .invoke_handler(tauri::generate_handler![
            select_project_root,
            pick_local_image,
            read_file_text,
            read_file_binary,
            write_file_text,
            write_file_binary,
            file_exists,
            create_dir_all,
            read_recent_projects,
            write_recent_projects,
            clear_recent_projects,
            watch_directory,
            unwatch_directory
        ])
}

pub fn run() {
    configure(tauri::Builder::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(all(test, not(windows)))]
mod tests {
    use super::{configure, ProjectPathScope};
    use serde::de::DeserializeOwned;
    use serde_json::{json, Value};
    use std::fs;
    use tauri::ipc::{CallbackFn, InvokeBody, InvokeResponseBody};
    use tauri::test::{get_ipc_response, mock_builder, mock_context, noop_assets, INVOKE_KEY};
    use tauri::webview::InvokeRequest;
    use tauri::{Manager, WebviewWindowBuilder};

    fn request(command: &str, body: Value) -> InvokeRequest {
        InvokeRequest {
            cmd: command.into(),
            callback: CallbackFn(0),
            error: CallbackFn(1),
            url: if cfg!(windows) {
                "http://tauri.localhost"
            } else {
                "tauri://localhost"
            }
            .parse()
            .unwrap(),
            body: InvokeBody::Json(body),
            headers: Default::default(),
            invoke_key: INVOKE_KEY.to_string(),
        }
    }

    fn invoke<T: DeserializeOwned>(
        window: &tauri::WebviewWindow<tauri::test::MockRuntime>,
        command: &str,
        body: Value,
    ) -> T {
        get_ipc_response(window, request(command, body))
            .unwrap()
            .deserialize()
            .unwrap()
    }

    #[test]
    fn ipc_roundtrip_covers_project_files_binary_io_and_watcher_lifecycle() {
        let app = configure(mock_builder())
            .build(mock_context(noop_assets()))
            .unwrap();
        let window = WebviewWindowBuilder::new(&app, "main", Default::default())
            .build()
            .unwrap();
        let root = std::env::temp_dir().join(format!("gamebob-ipc-{}", std::process::id()));
        fs::create_dir_all(&root).unwrap();
        app.state::<ProjectPathScope>()
            .authorize(&root.to_string_lossy())
            .unwrap();

        let config_path = root.join(".gbtoolkit.json");
        let config_path_string = config_path.to_string_lossy().into_owned();
        let config = r#"{"version":1,"name":"IPC","targetEngine":"generic","pipeline":{}}"#;
        let _: () = invoke(
            &window,
            "write_file_text",
            json!({ "path": config_path_string.clone(), "content": config }),
        );
        let loaded: String = invoke(
            &window,
            "read_file_text",
            json!({ "path": config_path_string }),
        );
        assert_eq!(loaded, config);

        let binary_path = root.join("atlas.png");
        let binary_path_string = binary_path.to_string_lossy().into_owned();
        let bytes = vec![137_u8, 80, 78, 71];
        let _: () = invoke(
            &window,
            "write_file_binary",
            json!({ "path": binary_path_string.clone(), "data": bytes.clone() }),
        );
        let response = get_ipc_response(
            &window,
            request("read_file_binary", json!({ "path": binary_path_string })),
        )
        .unwrap();
        assert!(matches!(response, InvokeResponseBody::Raw(data) if data == bytes));

        let _: () = invoke(
            &window,
            "watch_directory",
            json!({ "path": root.to_string_lossy() }),
        );
        let _: () = invoke(
            &window,
            "unwatch_directory",
            json!({ "path": root.to_string_lossy() }),
        );

        fs::remove_dir_all(root).unwrap();
    }
}
