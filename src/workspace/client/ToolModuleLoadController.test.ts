import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ToolModuleLoadController,
  type ToolModuleLoadSnapshot,
} from './ToolModuleLoadController';

const PACKER = {
  toolId: 'spriteSheetPacker',
  routePath: '/workspace/tool/sprite-sheet-packer/',
};

const HITBOX = {
  toolId: 'hitboxHurtboxAnimator',
  routePath: '/workspace/tool/hitbox-hurtbox-animator/',
};

describe('ToolModuleLoadController', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(1000);
  });

  it('accepts readiness immediately after mount without exposing the delayed indicator', () => {
    const snapshots: ToolModuleLoadSnapshot[] = [];
    const controller = createController(snapshots);

    expect(controller.mount(PACKER)).toBe(true);
    expect(controller.ready(PACKER.toolId)).toBe(true);

    vi.advanceTimersByTime(2000);

    expect(controller.getSnapshot()).toEqual(expect.objectContaining({
      status: 'ready',
      indicatorVisible: false,
      error: null,
      lastReadyTarget: PACKER,
    }));
    expect(snapshots.map((snapshot) => snapshot.status)).toEqual(['mounting', 'ready']);
  });

  it('shows progress only after the short anti-flicker delay', () => {
    const controller = createController();

    controller.mount(PACKER);
    vi.advanceTimersByTime(149);
    expect(controller.getSnapshot().indicatorVisible).toBe(false);

    vi.advanceTimersByTime(1);
    expect(controller.getSnapshot()).toEqual(expect.objectContaining({
      status: 'mounting',
      indicatorVisible: true,
    }));
  });

  it('turns absence of ready into a recoverable timeout after two seconds', () => {
    const controller = createController();

    controller.mount(PACKER);
    vi.advanceTimersByTime(2000);

    expect(controller.getSnapshot()).toEqual(expect.objectContaining({
      status: 'error',
      indicatorVisible: true,
      error: {
        reason: 'ready-timeout',
        message: 'The module did not confirm readiness within 2 seconds.',
      },
    }));
  });

  it('reports a route failure only for the active module', () => {
    const controller = createController();

    controller.mount(PACKER);
    expect(controller.fail(HITBOX.toolId, 'route-error', 'Wrong route')).toBe(false);
    expect(controller.fail(PACKER.toolId, 'route-error', 'Route could not be loaded.')).toBe(true);
    expect(controller.getSnapshot().error?.reason).toBe('route-error');
  });

  it('reports a script failure separately from route failures', () => {
    const controller = createController();

    controller.mount(PACKER);
    expect(controller.fail(PACKER.toolId, 'script-error', 'Tool initialization failed.')).toBe(true);
    expect(controller.getSnapshot().error?.reason).toBe('script-error');
  });

  it('retries the failed target with a fresh lifecycle', () => {
    const controller = createController();

    controller.mount(PACKER);
    controller.fail(PACKER.toolId, 'script-error', 'Tool initialization failed.');
    vi.setSystemTime(4000);

    expect(controller.retry()).toEqual(PACKER);
    expect(controller.getSnapshot()).toEqual(expect.objectContaining({
      status: 'mounting',
      target: PACKER,
      error: null,
      startedAt: 4000,
    }));
    expect(controller.ready(PACKER.toolId)).toBe(true);
  });

  it('restores the last ready module after a different module fails', () => {
    const controller = createController();

    controller.mount(PACKER);
    controller.ready(PACKER.toolId);
    controller.mount(HITBOX);
    controller.fail(HITBOX.toolId, 'ready-timeout', 'Timed out');

    expect(controller.restoreLastReady()).toEqual(PACKER);
    expect(controller.getSnapshot()).toEqual(expect.objectContaining({
      status: 'mounting',
      target: PACKER,
      lastReadyTarget: PACKER,
      error: null,
    }));
  });

  it('ignores repeated renders and stale readiness signals', () => {
    const snapshots: ToolModuleLoadSnapshot[] = [];
    const controller = createController(snapshots);

    expect(controller.mount(PACKER)).toBe(true);
    expect(controller.mount(PACKER)).toBe(false);
    expect(controller.ready(HITBOX.toolId)).toBe(false);
    expect(controller.ready(PACKER.toolId)).toBe(true);
    expect(controller.ready(PACKER.toolId)).toBe(false);

    expect(snapshots).toHaveLength(2);
  });
});

function createController(snapshots?: ToolModuleLoadSnapshot[]): ToolModuleLoadController {
  return new ToolModuleLoadController(
    (snapshot) => snapshots?.push({
      ...snapshot,
      target: snapshot.target ? { ...snapshot.target } : null,
      lastReadyTarget: snapshot.lastReadyTarget ? { ...snapshot.lastReadyTarget } : null,
      error: snapshot.error ? { ...snapshot.error } : null,
    }),
    {
      clock: Date.now,
      scheduler: {
        set: (callback, delayMs) => setTimeout(callback, delayMs),
        clear: (timer) => clearTimeout(timer as ReturnType<typeof setTimeout>),
      },
    },
  );
}
