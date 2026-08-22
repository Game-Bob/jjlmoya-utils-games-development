import { describe, expect, it } from 'vitest';
import {
  clampShape,
  cloneProject,
  copyShapesToFrame,
  createProject,
  createSequenceFrames,
  createShape,
  createSheetFrames,
  duplicateShape,
  mirrorShape,
  moveShape,
  parseProject,
  serializeProject,
  shapeAtPoint,
} from './logic';

const image = { name: 'fighter.png', width: 128, height: 64 };

describe('hitbox animator logic', () => {
  it('slices a sheet row first with stable pixel coordinates', () => {
    const frames = createSheetFrames(image, 2, 4);
    expect(frames).toHaveLength(8);
    expect(frames[5]).toMatchObject({ index: 5, sourceX: 32, sourceY: 32, width: 32, height: 32 });
    expect(frames[0]?.pivot).toEqual({ x: 16, y: 16 });
  });

  it('normalizes invalid slicing counts', () => {
    const frames = createSheetFrames(image, 0, -3);
    expect(frames).toHaveLength(1);
    expect(frames[0]).toMatchObject({ width: 128, height: 64 });
  });

  it('creates one full frame for every ordered image', () => {
    const frames = createSequenceFrames([image, { name: 'fighter-2.webp', width: 96, height: 80 }]);
    expect(frames[1]).toMatchObject({ imageIndex: 1, width: 96, height: 80, sourceX: 0, sourceY: 0 });
  });

  it('creates sheet and sequence projects with top left coordinates', () => {
    const sheet = createProject([image], 2, 4);
    const sequence = createProject([image, image], 4, 8);
    const empty = createProject([]);
    expect(sheet).toMatchObject({ rows: 2, columns: 4, fps: 12, coordinateSystem: 'top-left-pixels' });
    expect(sequence).toMatchObject({ rows: 1, columns: 1 });
    expect(empty.frames[0]).toMatchObject({ width: 1, height: 1 });
  });

  it('creates normalized rectangles and square circles inside a frame', () => {
    const frame = createSheetFrames(image, 1, 1)[0]!;
    const rectangle = createShape({ frame, type: 'hitbox', geometry: 'rectangle', startX: 60, startY: 40, endX: 20, endY: 10, name: 'Strike' });
    const circle = createShape({ frame: { ...frame, shapes: [rectangle] }, type: 'sensor', geometry: 'circle', startX: -2, startY: 5, endX: 80, endY: 25, name: 'Range' });
    expect(rectangle).toMatchObject({ id: 'shape-1-1', x: 20, y: 10, width: 40, height: 30 });
    expect(circle).toMatchObject({ id: 'shape-1-2', x: 0, y: 5, width: 20, height: 20 });
  });

  it('clamps, moves, mirrors, and duplicates shapes', () => {
    const frame = createSheetFrames(image, 1, 1)[0]!;
    const shape = { id: 'shape-1-7', name: 'Body', type: 'hurtbox' as const, geometry: 'circle' as const, x: -5, y: 60, width: -20, height: 9 };
    const clamped = clampShape(shape, frame);
    expect(clamped).toMatchObject({ x: 0, y: 44, width: 20, height: 20 });
    expect(moveShape(clamped, frame, 500, -500)).toMatchObject({ x: 108, y: 0 });
    expect(mirrorShape(clamped, 128).x).toBe(108);
    expect(duplicateShape(clamped, { ...frame, shapes: [shape] })).toMatchObject({ id: 'shape-1-8', name: 'Body copy', x: 2, y: 44 });
  });

  it('copies shapes with frame local identifiers', () => {
    const [source, target] = createSheetFrames(image, 1, 2);
    source!.shapes = [{ id: 'shape-1-1', name: 'Attack', type: 'hitbox', geometry: 'rectangle', x: 4, y: 5, width: 20, height: 10 }];
    const copied = copyShapesToFrame(source!, target!);
    expect(copied.shapes[0]).toMatchObject({ id: 'shape-2-1', name: 'Attack' });
  });

  it('finds the topmost shape and returns undefined outside shapes', () => {
    const shapes = [
      { id: 'a', name: 'A', type: 'hitbox' as const, geometry: 'rectangle' as const, x: 0, y: 0, width: 20, height: 20 },
      { id: 'b', name: 'B', type: 'hurtbox' as const, geometry: 'rectangle' as const, x: 5, y: 5, width: 20, height: 20 },
    ];
    expect(shapeAtPoint(shapes, 10, 10)?.id).toBe('b');
    expect(shapeAtPoint(shapes, 40, 40)).toBeUndefined();
  });

  it('round trips projects without sharing mutable references', () => {
    const project = createProject([image], 2, 2);
    const source = serializeProject(project);
    const parsed = parseProject(source);
    const cloned = cloneProject(project);
    parsed.frames[0]!.pivot.x = 99;
    cloned.frames[0]!.pivot.y = 88;
    expect(project.frames[0]?.pivot).toEqual({ x: 32, y: 16 });
  });

  it('rejects malformed project JSON', () => {
    expect(() => parseProject('{"version":1}')).toThrow('Invalid collision project');
    expect(() => parseProject('not json')).toThrow();
    expect(() => parseProject('null')).toThrow('Invalid collision project');
  });
});
