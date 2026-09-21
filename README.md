# GameBob Quest

GameBob Quest is a Tauri 2 desktop workspace for the GameBob game-development utilities. The same tools remain available as static Astro microfrontends, while native builds add controlled filesystem access, project persistence, directory watching and direct exports.

## Architecture

The application separates business logic from platform access:

- Tool logic is pure TypeScript and does not depend on Tauri.
- IPlatformBridge exposes file, dialog, project, watcher and authorization contracts.
- Web adapters use browser APIs and virtual storage.
- Desktop adapters use a typed command inventory and Tauri gateways.
- Rust authorizes a selected project root before any file operation.
- Filesystem paths are canonicalized and restricted to authorized roots.
- Project configuration is stored in .gbtoolkit.json using atomic writes.
- Recent projects are stored in the operating-system application data directory.
- Workspace and sandboxed iframe tools communicate through source and origin validated messages.

## Requirements

- Node.js 22.19 or newer
- Rust stable
- Tauri 2 system dependencies for the target operating system

Linux packaging additionally requires WebKitGTK 4.1, AppIndicator, librsvg and patchelf.

The current @jjlmoya/utils-shared release declares Astro support through version 6. GameBob Quest uses Astro 7 to receive the upstream security fixes and keeps legacy peer resolution enabled until the shared package publishes matching metadata. The complete type, test and production-build gates verify this tested compatibility path.

## Development

Install dependencies and start the native application:

```bash
npm ci
npm run tauri:dev
```

Run the complete verification gate:

```bash
npm run desktop:verify
```

The gate runs the web linters, all Vitest suites, the Astro production build, typed IPC contract tests, Rust unit tests and cargo check.

## Packaging

Build an installer for the current operating system:

```bash
npm run tauri:build
```

Generated installers are written below src-tauri/target/release/bundle. The Desktop GitHub Actions workflow builds and uploads installers independently on Windows, macOS and Linux.

## Project format

Each project uses a versioned .gbtoolkit.json file with these fields:

- version: schema version
- name: display name
- targetEngine: godot4, unity, defold or generic
- pipeline: per-tool input directory, output directory and scalar options

Opening a project authorizes only that canonical directory. Paths outside selected projects, parent traversal and symlink escapes are rejected by the Rust backend.

## Security model

The desktop webview runs with an explicit Content Security Policy. Capabilities expose only core application access and native open and save dialogs. Project files and internal recent-project storage use separate commands. Files larger than 256 MiB are rejected and file IO runs outside the webview thread.
