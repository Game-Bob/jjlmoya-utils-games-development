import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WebPlatformBridge } from '../../platform/adapters/web/WebPlatformBridge';
import type {
  DesktopToolInstance,
  DesktopToolModule,
  JsonObject,
} from '../modules/DesktopToolModule';
import { DesktopToolRegistry } from '../modules/DesktopToolRegistry';
import {
  DesktopToolHost,
  type DesktopToolSurfaceManager,
  type DesktopToolSurfaceTransaction,
} from './DesktopToolHost';

describe('DesktopToolHost', () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  it('mounts and activates a registered module before committing its surface', async () => {
    const fixture = createHostFixture([createModule('alpha')]);

    await expect(fixture.host.open('alpha')).resolves.toBe(true);

    expect(fixture.instances.alpha?.mount).toHaveBeenCalledOnce();
    expect(fixture.instances.alpha?.activate).toHaveBeenCalledOnce();
    expect(fixture.surfaces.transactions[0]?.commit).toHaveBeenCalledOnce();
    expect(fixture.host.getSnapshot()).toEqual({
      status: 'ready',
      requestedModuleId: 'alpha',
      activeModuleId: 'alpha',
      error: null,
    });
  });

  it('keeps the last valid module active while the next module is mounting', async () => {
    const deferred = createDeferred<void>();
    const fixture = createHostFixture([
      createModule('alpha'),
      createModule('beta', { mountResult: deferred.promise }),
    ]);
    await fixture.host.open('alpha');

    const opening = fixture.host.open('beta');

    expect(fixture.instances.alpha?.deactivate).not.toHaveBeenCalled();
    expect(fixture.surfaces.transactions[1]?.commit).not.toHaveBeenCalled();
    expect(fixture.host.getSnapshot().activeModuleId).toBe('alpha');

    deferred.resolve();
    await expect(opening).resolves.toBe(true);
    expect(fixture.instances.alpha?.deactivate).toHaveBeenCalledWith('tool-switch');
    expect(fixture.instances.alpha?.dispose).toHaveBeenCalledOnce();
  });

  it('rolls back a failed module and preserves the last valid module', async () => {
    const fixture = createHostFixture([
      createModule('alpha'),
      createModule('beta', { mountError: new Error('Broken module') }),
    ]);
    await fixture.host.open('alpha');

    await expect(fixture.host.open('beta')).resolves.toBe(false);

    expect(fixture.surfaces.transactions[1]?.rollback).toHaveBeenCalledOnce();
    expect(fixture.instances.beta?.dispose).toHaveBeenCalledOnce();
    expect(fixture.instances.alpha?.deactivate).not.toHaveBeenCalled();
    expect(fixture.host.getSnapshot()).toEqual({
      status: 'error',
      requestedModuleId: 'beta',
      activeModuleId: 'alpha',
      error: 'Broken module',
    });
  });

  it('restores the last valid module without recreating it', async () => {
    const fixture = createHostFixture([
      createModule('alpha'),
      createModule('beta', { mountError: new Error('Broken module') }),
    ]);
    await fixture.host.open('alpha');
    await fixture.host.open('beta');

    expect(fixture.host.restoreActive()).toBe(true);

    expect(fixture.instances.alpha?.mount).toHaveBeenCalledOnce();
    expect(fixture.host.getSnapshot()).toEqual({
      status: 'ready',
      requestedModuleId: 'alpha',
      activeModuleId: 'alpha',
      error: null,
    });
  });

  it('exposes retrying and commits a successful retry', async () => {
    let attempt = 0;
    const module = createModule('alpha', {
      mountFactory: () => {
        attempt += 1;
        return attempt === 1 ? Promise.reject(new Error('First attempt failed')) : Promise.resolve();
      },
    });
    const states: string[] = [];
    const fixture = createHostFixture([module], {
      onStateChange: (snapshot) => states.push(snapshot.status),
    });

    await expect(fixture.host.open('alpha')).resolves.toBe(false);
    await expect(fixture.host.retry()).resolves.toBe(true);

    expect(states).toEqual(['mounting', 'error', 'retrying', 'ready']);
  });

  it('times out mounting and rolls back the staged surface', async () => {
    vi.useFakeTimers();
    const fixture = createHostFixture(
      [createModule('alpha', { mountResult: new Promise<void>(() => undefined) })],
      { mountTimeoutMs: 2000 },
    );

    const opening = fixture.host.open('alpha');
    await vi.advanceTimersByTimeAsync(2000);

    await expect(opening).resolves.toBe(false);
    expect(fixture.host.getSnapshot().error).toContain('did not mount within 2000ms');
    expect(fixture.surfaces.transactions[0]?.rollback).toHaveBeenCalledOnce();
  });

  it('aborts pending and active work during replacement and disposal', async () => {
    const fixture = createHostFixture([createModule('alpha'), createModule('beta')]);
    await fixture.host.open('alpha');
    const alphaSignal = fixture.mountSignals.alpha;

    await fixture.host.open('beta');
    expect(alphaSignal?.aborted).toBe(true);

    const betaSignal = fixture.mountSignals.beta;
    await fixture.host.dispose();
    expect(betaSignal?.aborted).toBe(true);
    expect(fixture.instances.beta?.deactivate).toHaveBeenCalledWith('dispose');
    expect(fixture.instances.beta?.dispose).toHaveBeenCalledOnce();
    expect(fixture.host.getSnapshot().status).toBe('idle');
  });

  it('reports unknown modules without rejecting the host operation', async () => {
    const fixture = createHostFixture([]);

    await expect(fixture.host.open('missing')).resolves.toBe(false);

    expect(fixture.host.getSnapshot()).toEqual({
      status: 'error',
      requestedModuleId: 'missing',
      activeModuleId: null,
      error: 'Unknown module id: missing',
    });
  });

  it('keeps the new module ready when previous cleanup reports a failure', async () => {
    const fixture = createHostFixture([
      createModule('alpha', { disposeError: new Error('Listener cleanup failed') }),
      createModule('beta'),
    ]);
    await fixture.host.open('alpha');

    await expect(fixture.host.open('beta')).resolves.toBe(true);

    expect(fixture.host.getSnapshot()).toEqual({
      status: 'ready',
      requestedModuleId: 'beta',
      activeModuleId: 'beta',
      error: 'Previous module cleanup failed: Listener cleanup failed',
    });
  });
});

interface ModuleOptions {
  mountResult?: Promise<void>;
  mountError?: Error;
  mountFactory?: () => Promise<void>;
  disposeError?: Error;
}

interface HostFixture {
  host: DesktopToolHost;
  instances: Record<string, MockInstance | undefined>;
  mountSignals: Record<string, AbortSignal | undefined>;
  surfaces: MockSurfaceManager;
}

interface HostOverrides {
  mountTimeoutMs?: number;
  onStateChange?: ConstructorParameters<typeof DesktopToolHost>[0]['onStateChange'];
}

type MockInstance = DesktopToolInstance & {
  mount: ReturnType<typeof vi.fn>;
  activate: ReturnType<typeof vi.fn>;
  deactivate: ReturnType<typeof vi.fn>;
  dispose: ReturnType<typeof vi.fn>;
};

class MockSurfaceManager implements DesktopToolSurfaceManager {
  public readonly transactions: MockTransaction[] = [];

  public prepare(_moduleId: string): DesktopToolSurfaceTransaction {
    const transaction = new MockTransaction();
    this.transactions.push(transaction);
    return transaction;
  }
}

class MockTransaction implements DesktopToolSurfaceTransaction {
  public readonly show = vi.fn(async () => undefined);
  public readonly clear = vi.fn(async () => undefined);
  public readonly commit = vi.fn(async () => undefined);
  public readonly rollback = vi.fn(async () => undefined);
}

function createHostFixture(
  modules: DesktopToolModule[],
  overrides: HostOverrides = {},
): HostFixture {
  const instances: Record<string, MockInstance | undefined> = {};
  const mountSignals: Record<string, AbortSignal | undefined> = {};
  const surfaces = new MockSurfaceManager();
  for (const module of modules) {
    const create = module.create.bind(module);
    module.create = () => {
      const instance = create() as MockInstance;
      instances[module.manifest.id] = instance;
      return instance;
    };
  }
  const host = new DesktopToolHost({
    registry: new DesktopToolRegistry(modules),
    surfaces,
    createContext: (signal) => {
      const activeModuleId = modules.find((module) => !mountSignals[module.manifest.id])?.manifest.id;
      if (activeModuleId) mountSignals[activeModuleId] = signal;
      return {
        project: null,
        projectConfig: null,
        platform: new WebPlatformBridge(),
        signal,
        reportActivity: () => undefined,
      };
    },
    ...(overrides.mountTimeoutMs !== undefined
      ? { mountTimeoutMs: overrides.mountTimeoutMs }
      : {}),
    ...(overrides.onStateChange ? { onStateChange: overrides.onStateChange } : {}),
  });
  return { host, instances, mountSignals, surfaces };
}

function createModule(moduleId: string, options: ModuleOptions = {}): DesktopToolModule {
  return {
    manifest: {
      id: moduleId,
      version: '1.0.0',
      name: moduleId,
      description: `${moduleId} module`,
      capabilities: [],
      commands: [],
      inputs: [],
      outputs: [],
    },
    create: () => createInstance(options),
  };
}

function createInstance(options: ModuleOptions): MockInstance {
  const mount = vi.fn(async (_context: unknown, _session?: Readonly<JsonObject>) => {
    if (options.mountError) throw options.mountError;
    if (options.mountFactory) return options.mountFactory();
    return options.mountResult;
  });
  return {
    mount,
    updateContext: vi.fn(async () => undefined),
    activate: vi.fn(async () => undefined),
    deactivate: vi.fn(async () => undefined),
    isCommandEnabled: vi.fn(() => false),
    executeCommand: vi.fn(async () => undefined),
    serializeSession: vi.fn(() => ({})),
    dispose: vi.fn(async () => {
      if (options.disposeError) throw options.disposeError;
    }),
  };
}

function createDeferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  const promise = new Promise<T>((resolvePromise) => {
    resolve = resolvePromise;
  });
  return { promise, resolve };
}
