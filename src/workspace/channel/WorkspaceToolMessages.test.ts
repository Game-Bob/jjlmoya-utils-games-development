import { describe, expect, it } from 'vitest';
import { isToolToWorkspaceMessage, isWorkspaceToToolMessage } from './WorkspaceToolMessages';

describe('Workspace tool message contract', () => {
  it('accepts valid messages in both directions', () => {
    expect(isToolToWorkspaceMessage({ type: 'tool:ready', toolId: 'spriteSheetPacker' })).toBe(true);
    expect(isToolToWorkspaceMessage({
      type: 'tool:log',
      toolId: 'spriteSheetPacker',
      severity: 'success',
      message: 'Exported',
    })).toBe(true);
    expect(isToolToWorkspaceMessage({
      type: 'tool:error',
      toolId: 'spriteSheetPacker',
      message: 'Initialization failed',
    })).toBe(true);
    expect(isWorkspaceToToolMessage({ type: 'workspace:sync' })).toBe(true);
  });

  it('rejects unknown or malformed messages', () => {
    expect(isToolToWorkspaceMessage({ type: 'tool:log', severity: 'fatal' })).toBe(false);
    expect(isToolToWorkspaceMessage({ type: 'tool:error', toolId: 'spriteSheetPacker' })).toBe(false);
    expect(isToolToWorkspaceMessage({ type: 'unknown' })).toBe(false);
    expect(isWorkspaceToToolMessage({ type: 'workspace:unknown' })).toBe(false);
    expect(isWorkspaceToToolMessage(null)).toBe(false);
  });
});
