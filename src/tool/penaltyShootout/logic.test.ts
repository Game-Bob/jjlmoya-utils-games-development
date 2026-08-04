import { describe, it, expect } from 'vitest';
import { createInitialState, recordShot, undoShot } from './logic';

describe('Penalty Shootout Logic', () => {
  it('creates initial state correctly', () => {
    const state = createInitialState('Real Madrid', 'Barcelona');
    expect(state.teamAName).toBe('Real Madrid');
    expect(state.teamBName).toBe('Barcelona');
    expect(state.currentRound).toBe(1);
    expect(state.currentTurn).toBe('A');
    expect(state.teamAScore).toBe(0);
    expect(state.teamBScore).toBe(0);
    expect(state.isFinished).toBe(false);
  });

  it('records shots and updates scores and turns', () => {
    let state = createInitialState();
    state = recordShot(state, 'scored');
    expect(state.teamAScore).toBe(1);
    expect(state.currentTurn).toBe('B');
    expect(state.currentRound).toBe(1);

    state = recordShot(state, 'missed');
    expect(state.teamBScore).toBe(0);
    expect(state.currentTurn).toBe('A');
    expect(state.currentRound).toBe(2);
  });

  it('detects early mathematical victory', () => {
    let state = createInitialState();
    state = recordShot(state, 'scored');
    state = recordShot(state, 'missed');
    state = recordShot(state, 'scored');
    state = recordShot(state, 'missed');
    state = recordShot(state, 'scored');
    state = recordShot(state, 'missed');

    expect(state.isFinished).toBe(true);
    expect(state.winner).toBe('A');
    expect(state.winReason).toBe('Unreachable Lead');
  });

  it('supports undoing shot history', () => {
    let state = createInitialState();
    state = recordShot(state, 'scored');
    expect(state.teamAScore).toBe(1);
    state = undoShot(state);
    expect(state.teamAScore).toBe(0);
    expect(state.currentTurn).toBe('A');
  });
});
