import { describe, it, expect, beforeEach } from 'vitest';
import {
    isTauriEnvironment,
    resolvePlatformBridge,
    setPlatformBridge,
    WebPlatformBridge,
    WebFileReader,
    WebFileWriter,
    WebDirectoryWatcher,
    WebProjectStorageService,
    TauriPlatformBridge,
    TauriFileReader,
    TauriFileWriter,
    TauriDialogAdapter,
    TauriDirectoryWatcherAdapter,
    TauriProjectStorageAdapter
} from './index';
import type { ProjectMetadata } from './contracts/IProjectStorageService';

describe('Platform Abstraction Layer', () => {
    beforeEach(() => {
        setPlatformBridge(null);
    });

    describe('Runtime Environment Detector', () => {
        it('identifies non-tauri environment by default', () => {
            expect(isTauriEnvironment()).toBe(false);
        });
    });

    describe('WebFileReader', () => {
        it('reads registered virtual text and binary files', async () => {
            const reader = new WebFileReader();
            const encoder = new TextEncoder();
            const content = 'mock content';
            reader.registerVirtualFile('virtual:test.txt', encoder.encode(content));

            const exists = await reader.exists('virtual:test.txt');
            expect(exists).toBe(true);

            const text = await reader.readText('virtual:test.txt');
            expect(text).toBe(content);

            const binary = await reader.readBinary('virtual:test.txt');
            expect(binary).toEqual(encoder.encode(content));
        });

        it('throws error when file is not found', async () => {
            const reader = new WebFileReader();
            await expect(reader.readText('nonexistent.txt')).rejects.toThrow();
            await expect(reader.readBinary('nonexistent.bin')).rejects.toThrow();
            const exists = await reader.exists('nonexistent.txt');
            expect(exists).toBe(false);
        });
    });

    describe('WebFileWriter', () => {
        it('writes text and binary data into storage', async () => {
            const writer = new WebFileWriter();
            await writer.writeText('virtual:out.txt', 'hello world');
            const storedText = writer.getStoredData('virtual:out.txt');
            expect(storedText).toBeDefined();

            const binaryData = new Uint8Array([1, 2, 3, 4]);
            await writer.writeBinary('virtual:out.bin', binaryData);
            const storedBinary = writer.getStoredData('virtual:out.bin');
            expect(storedBinary).toEqual(binaryData);

            await writer.createDirectory('virtual:assets');
        });
    });

    describe('WebDirectoryWatcher', () => {
        it('subscribes to events and triggers listeners', async () => {
            const watcher = new WebDirectoryWatcher();
            let eventReceived = false;

            const unsubscribe = await watcher.watch('my_project/assets', (event) => {
                if (event.path === 'sprite.png') {
                    eventReceived = true;
                }
            });

            expect(watcher.isWatching('my_project/assets')).toBe(true);

            watcher.simulateFileChange('my_project/assets', {
                type: 'modified',
                path: 'sprite.png',
                timestamp: Date.now()
            });

            expect(eventReceived).toBe(true);

            unsubscribe();
            expect(watcher.isWatching('my_project/assets')).toBe(false);
        });

        it('stops all active watchers', async () => {
            const watcher = new WebDirectoryWatcher();
            await watcher.watch('dir_a', () => {});
            await watcher.watch('dir_b', () => {});

            expect(watcher.isWatching('dir_a')).toBe(true);
            expect(watcher.isWatching('dir_b')).toBe(true);

            await watcher.stopAll();

            expect(watcher.isWatching('dir_a')).toBe(false);
            expect(watcher.isWatching('dir_b')).toBe(false);
        });
    });

    describe('WebProjectStorageService', () => {
        it('stores and retrieves recent projects in order', async () => {
            const storage = new WebProjectStorageService('test_storage_');
            await storage.clearRecentProjects();

            const proj1: ProjectMetadata = {
                id: '1',
                name: 'Project 1',
                path: '/path/1',
                lastOpened: 100
            };
            const proj2: ProjectMetadata = {
                id: '2',
                name: 'Project 2',
                path: '/path/2',
                lastOpened: 200
            };

            await storage.saveRecentProject(proj1);
            await storage.saveRecentProject(proj2);

            const recents = await storage.getRecentProjects();
            expect(recents.length).toBe(2);
            expect(recents[0]?.id).toBe('2');
            expect(recents[1]?.id).toBe('1');

            await storage.clearRecentProjects();
            const empty = await storage.getRecentProjects();
            expect(empty).toEqual([]);
        });

        it('saves and loads project configuration', async () => {
            const storage = new WebProjectStorageService('test_storage_');
            const config = { targetEngine: 'godot4', fps: 60 };

            await storage.saveProjectConfig('/my/project', config);
            const loaded = await storage.loadProjectConfig<{ targetEngine: string; fps: number }>('/my/project');

            expect(loaded).toEqual(config);

            const notFound = await storage.loadProjectConfig('/not/found');
            expect(notFound).toBeNull();
        });
    });

    describe('WebPlatformBridge and Resolver', () => {
        it('initializes default web bridge', () => {
            const bridge = resolvePlatformBridge();
            expect(bridge.platform).toBe('web');
            expect(bridge.isNativeDesktop()).toBe(false);
            expect(bridge.fileReader).toBeDefined();
            expect(bridge.fileWriter).toBeDefined();
            expect(bridge.dialogService).toBeDefined();
            expect(bridge.directoryWatcher).toBeDefined();
            expect(bridge.projectStorage).toBeDefined();
        });

        it('allows setting custom bridge', () => {
            const customBridge = new WebPlatformBridge();
            setPlatformBridge(customBridge);
            expect(resolvePlatformBridge()).toBe(customBridge);
        });
    });

    describe('TauriFileReader', () => {
        it('invokes native commands for text, binary and exists', async () => {
            const calls: string[] = [];
            const mockInvoker = async <T>(cmd: string, args?: Record<string, unknown>): Promise<T> => {
                calls.push(cmd);
                if (cmd === 'read_file_text') {
                    return 'desktop file content' as T;
                }
                if (cmd === 'read_file_binary') {
                    return [65, 66, 67] as T;
                }
                if (cmd === 'file_exists') {
                    return (args?.path === 'exists.txt') as T;
                }
                throw new Error(`Unexpected command: ${cmd}`);
            };

            const reader = new TauriFileReader(mockInvoker);
            const text = await reader.readText('file.txt');
            expect(text).toBe('desktop file content');

            const binary = await reader.readBinary('file.bin');
            expect(binary).toEqual(new Uint8Array([65, 66, 67]));

            const exists = await reader.exists('exists.txt');
            expect(exists).toBe(true);
            expect(calls).toContain('read_file_text');
            expect(calls).toContain('read_file_binary');
            expect(calls).toContain('file_exists');
        });
    });

    describe('TauriFileWriter', () => {
        it('invokes native commands for writing text and binary', async () => {
            const logged: Record<string, unknown>[] = [];
            const mockInvoker = async <T>(cmd: string, args?: Record<string, unknown>): Promise<T> => {
                logged.push({ cmd, args });
                return undefined as T;
            };

            const writer = new TauriFileWriter(mockInvoker);
            await writer.writeText('out.txt', 'hello');
            await writer.writeBinary('out.bin', new Uint8Array([1, 2]));
            await writer.createDirectory('folder');

            expect(logged[0]?.cmd).toBe('write_file_text');
            expect(logged[1]?.cmd).toBe('write_file_binary');
            expect(logged[2]?.cmd).toBe('create_dir_all');
        });
    });

    describe('TauriDialogAdapter', () => {
        it('handles file and directory opening dialogs', async () => {
            const mockInvoker = async <T>(cmd: string): Promise<T> => {
                if (cmd === 'open_file_dialog') {
                    return '/path/to/sprite.png' as T;
                }
                if (cmd === 'open_files_dialog') {
                    return ['/path/1.png', '/path/2.png'] as T;
                }
                if (cmd === 'open_directory_dialog') {
                    return '/project/assets' as T;
                }
                if (cmd === 'save_file_dialog') {
                    return '/export/atlas.json' as T;
                }
                throw new Error(cmd);
            };

            const dialog = new TauriDialogAdapter(mockInvoker);
            expect(await dialog.openFile()).toBe('/path/to/sprite.png');
            expect(await dialog.openFiles()).toEqual(['/path/1.png', '/path/2.png']);
            expect(await dialog.openDirectory()).toBe('/project/assets');
            expect(await dialog.saveFile()).toBe('/export/atlas.json');
        });

        it('recovers gracefully from dialog errors', async () => {
            const failingInvoker = async <T>(): Promise<T> => {
                throw new Error('User canceled or dialog error');
            };

            const dialog = new TauriDialogAdapter(failingInvoker);
            expect(await dialog.openFile()).toBeNull();
            expect(await dialog.openFiles()).toEqual([]);
            expect(await dialog.openDirectory()).toBeNull();
            expect(await dialog.saveFile()).toBeNull();
        });
    });

    describe('TauriDirectoryWatcherAdapter', () => {
        it('subscribes, receives events and unsubscribes', async () => {
            const invoked: string[] = [];
            const mockInvoker = async <T>(cmd: string): Promise<T> => {
                invoked.push(cmd);
                return undefined as T;
            };

            const watcher = new TauriDirectoryWatcherAdapter(mockInvoker);
            let received = false;

            const unsubscribe = await watcher.watch('/project/sprites', (e) => {
                if (e.path === 'walk.png') {
                    received = true;
                }
            });

            expect(watcher.isWatching('/project/sprites')).toBe(true);
            expect(invoked).toContain('watch_directory');

            watcher.dispatchFileEvent('/project/sprites', {
                type: 'modified',
                path: 'walk.png',
                timestamp: 1000
            });
            expect(received).toBe(true);

            unsubscribe();
            expect(watcher.isWatching('/project/sprites')).toBe(false);
        });
    });

    describe('TauriProjectStorageAdapter', () => {
        it('saves and loads configuration at .gbtoolkit.json path', async () => {
            const mockStorage = new Map<string, Uint8Array>();
            const reader = new WebFileReader(mockStorage);
            const writer = new WebFileWriter(mockStorage);
            const storage = new TauriProjectStorageAdapter(reader, writer, 'recents_test.json');

            const proj = {
                id: 'p1',
                name: 'My Game',
                path: '/games/rpg',
                lastOpened: 500
            };
            await storage.saveRecentProject(proj);
            const recents = await storage.getRecentProjects();
            expect(recents.length).toBe(1);
            expect(recents[0]?.name).toBe('My Game');

            const config = { engine: 'godot4', targetPpu: 16 };
            await storage.saveProjectConfig('/games/rpg', config);
            const loaded = await storage.loadProjectConfig<{ engine: string }>('/games/rpg');
            expect(loaded).toEqual(config);

            await storage.clearRecentProjects();
            expect(await storage.getRecentProjects()).toEqual([]);
        });
    });

    describe('TauriPlatformBridge', () => {
        it('initializes desktop bridge with native flag', () => {
            const bridge = new TauriPlatformBridge();
            expect(bridge.platform).toBe('desktop-tauri');
            expect(bridge.isNativeDesktop()).toBe(true);
            expect(bridge.fileReader).toBeDefined();
            expect(bridge.fileWriter).toBeDefined();
            expect(bridge.dialogService).toBeDefined();
            expect(bridge.directoryWatcher).toBeDefined();
            expect(bridge.projectStorage).toBeDefined();
        });
    });
});

