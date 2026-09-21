import { describe, expect, it, vi } from 'vitest';
import { PIPELINE_PHASES } from './pipelinePhases';
import { WorkspaceStateManager } from './state/WorkspaceStateManager';
import type { ProjectSummary } from './types';

describe('Workspace Module Architecture', () => {
  describe('Pipeline Phases Configuration', () => {
    it('contains all four pipeline phases', () => {
      expect(PIPELINE_PHASES).toHaveLength(4);
      const phaseIds = PIPELINE_PHASES.map((p) => p.id);
      expect(phaseIds).toEqual(['assets', 'audio', 'logic', 'publishing']);
    });

    it('contains seventeen unique tools across all phases', () => {
      const allTools = PIPELINE_PHASES.flatMap((p) => p.tools);
      expect(allTools).toHaveLength(17);

      const uniqueIds = new Set(allTools.map((t) => t.id));
      expect(uniqueIds.size).toBe(17);
    });

    it('ensures every tool matches its parent phase id and has a valid routePath', () => {
      for (const phase of PIPELINE_PHASES) {
        expect(phase.title.length).toBeGreaterThan(0);
        expect(phase.subtitle.length).toBeGreaterThan(0);
        for (const tool of phase.tools) {
          expect(tool.phaseId).toBe(phase.id);
          expect(tool.name.length).toBeGreaterThan(0);
          expect(tool.description.length).toBeGreaterThan(0);
          expect(tool.routePath).toMatch(/^\/en\/utilities\/categories\/game-development\//);
        }
      }
    });
  });

  describe('WorkspaceStateManager', () => {
    it('initializes with default state pointing to first phase and first tool', () => {
      const manager = new WorkspaceStateManager();
      const state = manager.getState();

      expect(state.currentProject).toBeNull();
      expect(state.activePhaseId).toBe('assets');
      expect(state.activeToolId).toBe('spriteSheetPacker');
      expect(state.logs).toHaveLength(0);
      expect(state.isDockExpanded).toBe(false);
      expect(state.activeLogFilter).toBe('all');
    });

    it('accepts initial state overrides', () => {
      const customProject: ProjectSummary = {
        name: 'RetroRPG',
        path: '/projects/retro-rpg',
        engine: 'godot',
        lastSyncedAt: 1700000000000,
      };

      const manager = new WorkspaceStateManager({
        currentProject: customProject,
        activePhaseId: 'audio',
        activeToolId: 'retroSfxGenerator',
        isDockExpanded: true,
        activeLogFilter: 'error',
      });

      const state = manager.getState();
      expect(state.currentProject).toEqual(customProject);
      expect(state.activePhaseId).toBe('audio');
      expect(state.activeToolId).toBe('retroSfxGenerator');
      expect(state.isDockExpanded).toBe(true);
      expect(state.activeLogFilter).toBe('error');
    });

    it('notifies subscribers immediately and on subsequent mutations', () => {
      const manager = new WorkspaceStateManager();
      const listener = vi.fn();

      const unsubscribe = manager.subscribe(listener);
      expect(listener).toHaveBeenCalledTimes(1);

      manager.setDockExpanded(true);
      expect(listener).toHaveBeenCalledTimes(2);
      expect(listener).toHaveBeenLastCalledWith(
        expect.objectContaining({ isDockExpanded: true }),
      );

      unsubscribe();
      manager.setDockExpanded(false);
      expect(listener).toHaveBeenCalledTimes(2);
    });

    it('updates current project', () => {
      const manager = new WorkspaceStateManager();
      const project: ProjectSummary = {
        name: 'CyberBlade',
        path: '/dev/games/cyberblade',
        engine: 'unity',
        lastSyncedAt: Date.now(),
      };

      manager.setProject(project);
      expect(manager.getState().currentProject).toEqual(project);

      manager.setProject(null);
      expect(manager.getState().currentProject).toBeNull();
    });

    it('selects phase and defaults to first tool of that phase', () => {
      const manager = new WorkspaceStateManager();

      manager.selectPhase('audio');
      let state = manager.getState();
      expect(state.activePhaseId).toBe('audio');
      expect(state.activeToolId).toBe('retroSfxGenerator');

      manager.selectPhase('publishing');
      state = manager.getState();
      expect(state.activePhaseId).toBe('publishing');
      expect(state.activeToolId).toBe('gameUIAccessibilityTester');
    });

    it('ignores selecting the current active phase or invalid phase', () => {
      const manager = new WorkspaceStateManager();
      const initial = manager.getState();

      manager.selectPhase('assets');
      expect(manager.getState()).toBe(initial);

      manager.selectPhase('nonexistent' as any);
      expect(manager.getState().activePhaseId).toBe('assets');
    });

    it('selects tool and automatically updates active phase', () => {
      const manager = new WorkspaceStateManager();

      manager.selectTool('damageFormulaLab');
      let state = manager.getState();
      expect(state.activeToolId).toBe('damageFormulaLab');
      expect(state.activePhaseId).toBe('logic');

      manager.selectTool('steamCapsuleGenerator');
      state = manager.getState();
      expect(state.activeToolId).toBe('steamCapsuleGenerator');
      expect(state.activePhaseId).toBe('publishing');
    });

    it('ignores selecting current active tool or unknown tool id', () => {
      const manager = new WorkspaceStateManager();
      const currentToolId = manager.getState().activeToolId;

      manager.selectTool(currentToolId);
      expect(manager.getState().activeToolId).toBe(currentToolId);

      manager.selectTool('unknown_tool_id');
      expect(manager.getState().activeToolId).toBe(currentToolId);
    });

    it('adds logs and preserves severity and source', () => {
      const manager = new WorkspaceStateManager();

      manager.addLog('info', 'Project loaded', 'system');
      manager.addLog('warn', 'Atlas texture dimensions exceed 2048px', 'spriteSheetPacker');
      manager.addLog('error', 'Failed to write manifest', 'spriteSheetPacker');
      manager.addLog('success', 'Build synced successfully');

      const logs = manager.getState().logs;
      expect(logs).toHaveLength(4);
      expect(logs[0]?.severity).toBe('info');
      expect(logs[0]?.sourceToolId).toBe('system');
      expect(logs[1]?.severity).toBe('warn');
      expect(logs[2]?.severity).toBe('error');
      expect(logs[3]?.severity).toBe('success');
      expect(logs[3]?.sourceToolId).toBeUndefined();
    });

    it('clears logs', () => {
      const manager = new WorkspaceStateManager();
      manager.addLog('info', 'First');
      manager.addLog('warn', 'Second');
      expect(manager.getState().logs).toHaveLength(2);

      manager.clearLogs();
      expect(manager.getState().logs).toHaveLength(0);

      const stateBeforeSecondClear = manager.getState();
      manager.clearLogs();
      expect(manager.getState()).toBe(stateBeforeSecondClear);
    });

    it('toggles and sets dock expansion', () => {
      const manager = new WorkspaceStateManager();
      expect(manager.getState().isDockExpanded).toBe(false);

      manager.toggleDock();
      expect(manager.getState().isDockExpanded).toBe(true);

      manager.toggleDock();
      expect(manager.getState().isDockExpanded).toBe(false);

      manager.setDockExpanded(true);
      expect(manager.getState().isDockExpanded).toBe(true);

      const stateRef = manager.getState();
      manager.setDockExpanded(true);
      expect(manager.getState()).toBe(stateRef);
    });

    it('filters logs by severity', () => {
      const manager = new WorkspaceStateManager();
      expect(manager.getState().activeLogFilter).toBe('all');

      manager.setLogFilter('error');
      expect(manager.getState().activeLogFilter).toBe('error');

      const stateRef = manager.getState();
      manager.setLogFilter('error');
      expect(manager.getState()).toBe(stateRef);
    });
  });
});
