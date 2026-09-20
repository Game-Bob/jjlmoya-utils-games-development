import { describe, it, expect, beforeEach } from 'vitest';
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
            expect(recents[0].id).toBe('2');
            expect(recents[1].id).toBe('1');

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
});
