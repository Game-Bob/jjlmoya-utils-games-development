use serde::Serialize;
use std::fmt::{Display, Formatter};

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PlatformError {
    pub code: &'static str,
    pub message: String,
}

impl PlatformError {
    pub fn invalid_path(message: impl Into<String>) -> Self {
        Self::new("INVALID_PATH", message)
    }

    pub fn permission_denied(message: impl Into<String>) -> Self {
        Self::new("PERMISSION_DENIED", message)
    }

    pub fn not_found(message: impl Into<String>) -> Self {
        Self::new("NOT_FOUND", message)
    }

    pub fn io(message: impl Into<String>) -> Self {
        Self::new("IO_ERROR", message)
    }

    pub fn too_large(message: impl Into<String>) -> Self {
        Self::new("FILE_TOO_LARGE", message)
    }

    pub fn watcher(message: impl Into<String>) -> Self {
        Self::new("WATCHER_ERROR", message)
    }

    pub fn internal(message: impl Into<String>) -> Self {
        Self::new("INTERNAL_ERROR", message)
    }

    fn new(code: &'static str, message: impl Into<String>) -> Self {
        Self {
            code,
            message: message.into(),
        }
    }
}

impl Display for PlatformError {
    fn fmt(&self, formatter: &mut Formatter<'_>) -> std::fmt::Result {
        write!(formatter, "{}: {}", self.code, self.message)
    }
}

impl std::error::Error for PlatformError {}
