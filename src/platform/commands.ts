export const PLATFORM_COMMANDS = {
    selectProjectRoot: 'select_project_root',
    pickLocalImage: 'pick_local_image',
    readFileText: 'read_file_text',
    readFileBinary: 'read_file_binary',
    writeFileText: 'write_file_text',
    writeFileBinary: 'write_file_binary',
    fileExists: 'file_exists',
    createDirectory: 'create_dir_all',
    readRecentProjects: 'read_recent_projects',
    writeRecentProjects: 'write_recent_projects',
    clearRecentProjects: 'clear_recent_projects',
    watchDirectory: 'watch_directory',
    unwatchDirectory: 'unwatch_directory'
} as const;

export type PlatformCommandName = typeof PLATFORM_COMMANDS[keyof typeof PLATFORM_COMMANDS];

export const PLATFORM_COMMAND_NAMES: readonly PlatformCommandName[] = Object.values(PLATFORM_COMMANDS);
