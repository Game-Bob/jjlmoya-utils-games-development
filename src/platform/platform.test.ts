import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
    isTauriEnvironment,
    resolvePlatformBridge,
    setPlatformBridge,
    WebPlatformBridge,
    WebFileReader,
    WebFileWriter,
    WebDirectoryWatcher,
    WebProjectStorageService
} from './index';
import {
    configureDesktopPlatformBridge,
    TauriPlatformBridge,
    TauriFileReader,
    TauriFileWriter,
    TauriDialogAdapter,
    TauriDirectoryWatcherAdapter,
    TauriProjectStorageAdapter
} from './desktop';
import type { ProjectMetadata } from './contracts/IProjectStorageService';
import type {
    ITauriDialogGateway,
    TauriOpenDialogOptions
} from './adapters/desktop/ITauriDialogGateway';
import type { ITauriEventGateway } from './adapters/desktop/ITauriEventGateway';

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
            expect(bridge.projectAccess).toBeDefined();
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

        it('supports concurrent reads without serializing the adapter', async () => {
            const completed: string[] = [];
            const mockInvoker = async <T>(_cmd: string, args?: Record<string, unknown>): Promise<T> => {
                await new Promise((resolve) => setTimeout(resolve, args?.path === 'slow.txt' ? 10 : 1));
                completed.push(String(args?.path));
                return String(args?.path) as T;
            };
            const reader = new TauriFileReader(mockInvoker);
            const results = await Promise.all([
                reader.readText('slow.txt'),
                reader.readText('fast.txt')
            ]);
            expect(results).toEqual(['slow.txt', 'fast.txt']);
            expect(completed).toEqual(['fast.txt', 'slow.txt']);
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
            const mockGateway: ITauriDialogGateway = {
                open: async (options: TauriOpenDialogOptions) => {
                    if (options.directory) {
                        return '/project/assets';
                    }
                    if (options.multiple) {
                        return ['/path/1.png', '/path/2.png'];
                    }
                    return '/path/to/sprite.png';
                },
                save: async () => '/export/atlas.json'
            };

            const dialog = new TauriDialogAdapter(mockGateway);
            expect(await dialog.openFile()).toBe('/path/to/sprite.png');
            expect(await dialog.openFiles()).toEqual(['/path/1.png', '/path/2.png']);
            expect(await dialog.openDirectory()).toBe('/project/assets');
            expect(await dialog.saveFile()).toBe('/export/atlas.json');
        });

        it('preserves cancellation results from the native plugin', async () => {
            const cancelingGateway: ITauriDialogGateway = {
                open: async () => null,
                save: async () => null
            };

            const dialog = new TauriDialogAdapter(cancelingGateway);
            expect(await dialog.openFile()).toBeNull();
            expect(await dialog.openFiles()).toEqual([]);
            expect(await dialog.openDirectory()).toBeNull();
            expect(await dialog.saveFile()).toBeNull();
        });

        it('propagates plugin failures instead of treating them as cancellation', async () => {
            const failingGateway: ITauriDialogGateway = {
                open: async () => {
                    throw new Error('Native dialog unavailable');
                },
                save: async () => {
                    throw new Error('Native dialog unavailable');
                }
            };

            const dialog = new TauriDialogAdapter(failingGateway);
            await expect(dialog.openDirectory()).rejects.toThrow('Native dialog unavailable');
            await expect(dialog.saveFile()).rejects.toThrow('Native dialog unavailable');
        });
    });

    describe('TauriDirectoryWatcherAdapter', () => {
        it('subscribes, receives events and unsubscribes', async () => {
            const invoked: string[] = [];
            const mockInvoker = async <T>(cmd: string): Promise<T> => {
                invoked.push(cmd);
                return undefined as T;
            };

            const eventGateway: ITauriEventGateway = {
                listen: async () => () => undefined
            };
            const watcher = new TauriDirectoryWatcherAdapter(mockInvoker, eventGateway, 0);
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

            await unsubscribe();
            expect(watcher.isWatching('/project/sprites')).toBe(false);
        });

        it('debounces repeated native events for the same path', async () => {
            vi.useFakeTimers();
            type Payload = { rootPath: string; event: { type: 'modified'; path: string; timestamp: number } };
            let emit: ((payload: Payload) => void) | undefined;
            const eventGateway: ITauriEventGateway = {
                listen: async <T>(_eventName: string, listener: (payload: T) => void) => {
                    emit = listener as (payload: Payload) => void;
                    return () => undefined;
                }
            };
            const invoker = async <T>(): Promise<T> => undefined as T;
            const watcher = new TauriDirectoryWatcherAdapter(invoker, eventGateway, 100);
            const listener = vi.fn();
            const stop = await watcher.watch('/project/sprites', listener);

            emit?.({ rootPath: '/project/sprites', event: { type: 'modified', path: 'hero.png', timestamp: 1 } });
            emit?.({ rootPath: '/project/sprites', event: { type: 'modified', path: 'hero.png', timestamp: 2 } });
            await vi.advanceTimersByTimeAsync(101);

            expect(listener).toHaveBeenCalledOnce();
            expect(listener).toHaveBeenCalledWith(expect.objectContaining({ timestamp: 2 }));
            await stop();
            vi.useRealTimers();
        });
    });

    describe('TauriProjectStorageAdapter', () => {
        it('uses Windows separators for canonical native project paths', async () => {
            const readPath = vi.fn(async () => false);
            const writePath = vi.fn(async () => undefined);
            const storage = new TauriProjectStorageAdapter(
                {
                    exists: readPath,
                    readText: async () => '',
                    readBinary: async () => new Uint8Array()
                },
                {
                    writeText: writePath,
                    writeBinary: async () => undefined,
                    createDirectory: async () => undefined
                }
            );
            const root = '\\\\?\\D:\\games\\quest';
            const configPath = '\\\\?\\D:\\games\\quest\\.gbtoolkit.json';

            await storage.loadProjectConfig(root);
            await storage.saveProjectConfig(root, { version: 1 });
            await storage.loadProjectConfig('\\\\?\\D:\\');

            expect(readPath).toHaveBeenCalledWith(configPath);
            expect(readPath).toHaveBeenCalledWith('\\\\?\\D:\\.gbtoolkit.json');
            expect(writePath).toHaveBeenCalledWith(configPath, '{\n  "version": 1\n}');
        });

        it('saves and loads configuration at .gbtoolkit.json path', async () => {
            const mockStorage = new Map<string, Uint8Array>();
            const reader = new WebFileReader(mockStorage);
            const writer = new WebFileWriter(mockStorage);
            let recentsJson = '[]';
            const invoker = async <T>(command: string, args?: Record<string, unknown>): Promise<T> => {
                if (command === 'read_recent_projects') return recentsJson as T;
                if (command === 'write_recent_projects') recentsJson = String(args?.content ?? '[]');
                if (command === 'clear_recent_projects') recentsJson = '[]';
                return undefined as T;
            };
            const storage = new TauriProjectStorageAdapter(reader, writer, invoker);

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

            recentsJson = '{invalid';
            await expect(storage.getRecentProjects()).rejects.toMatchObject({
                code: 'IO_ERROR'
            });
            recentsJson = '[]';

            await storage.clearRecentProjects();
            expect(await storage.getRecentProjects()).toEqual([]);
        });
    });

    describe('TauriPlatformBridge', () => {
        it('registers the desktop bridge only inside Tauri', () => {
            expect(configureDesktopPlatformBridge()).toBe(false);
            expect(resolvePlatformBridge().platform).toBe('web');

            vi.stubGlobal('window', { __TAURI_INTERNALS__: {} });
            expect(configureDesktopPlatformBridge()).toBe(true);
            expect(resolvePlatformBridge().platform).toBe('desktop-tauri');
            vi.unstubAllGlobals();
        });

        it('initializes desktop bridge with native flag', () => {
            const bridge = new TauriPlatformBridge();
            expect(bridge.platform).toBe('desktop-tauri');
            expect(bridge.isNativeDesktop()).toBe(true);
            expect(bridge.fileReader).toBeDefined();
            expect(bridge.fileWriter).toBeDefined();
            expect(bridge.dialogService).toBeDefined();
            expect(bridge.directoryWatcher).toBeDefined();
            expect(bridge.projectStorage).toBeDefined();
            expect(bridge.projectAccess).toBeDefined();
        });
    });
});
