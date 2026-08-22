import type { HitboxHurtboxAnimatorUI } from './ui';
import type { CollisionProject, CollisionType, ShapeGeometry } from './logic';
import type { EditorPreferences } from './storage';

export interface EditorState {
  root: HTMLElement;
  ui: HitboxHurtboxAnimatorUI;
  project: CollisionProject;
  images: HTMLImageElement[];
  currentFrame: number;
  selectedId: string;
  mode: 'select' | 'draw';
  collisionType: CollisionType;
  geometry: ShapeGeometry;
  playing: boolean;
  preferences: EditorPreferences;
  undoStack: CollisionProject[];
  redoStack: CollisionProject[];
}
