export interface SpriteFrameInput {
  id: string;
  name: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  trimmedX?: number;
  trimmedY?: number;
  originalWidth?: number;
  originalHeight?: number;
  pivotX?: number;
  pivotY?: number;
}

export type ExportFormat =
  | 'generic-json-hash'
  | 'generic-json-array'
  | 'unity'
  | 'godot'
  | 'phaser'
  | 'css';

export interface PackerOptions {
  padding: number;
  borderExtrusion: number;
  forcePowerOfTwo: boolean;
  maxTextureWidth: number;
  maxTextureHeight: number;
  allowRotation: boolean;
  trimTransparency: boolean;
  format: ExportFormat;
}

export interface PackedFrame {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  sourceSize: {
    w: number;
    h: number;
  };
  pivot: {
    x: number;
    y: number;
  };
}

export interface PackedResult {
  textureWidth: number;
  textureHeight: number;
  efficiency: number;
  totalFrames: number;
  frames: PackedFrame[];
  atlasJson: string;
  cssSnippet: string;
  codeSnippet: string;
  drawCallsBefore: number;
  drawCallsAfter: number;
}

export interface ExtractionGridConfig {
  imageWidth: number;
  imageHeight: number;
  frameWidth: number;
  frameHeight: number;
  margin: number;
  spacing: number;
}

export interface ExtractedFrameSlice {
  id: string;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
