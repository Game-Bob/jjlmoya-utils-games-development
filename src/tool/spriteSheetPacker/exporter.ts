import type { ExportFormat, PackedFrame } from './types';

function buildGenericHashJson(frames: PackedFrame[], width: number, height: number): string {
  const frameHash: Record<string, unknown> = {};
  for (const f of frames) {
    frameHash[f.name] = {
      frame: { x: f.x, y: f.y, w: f.width, h: f.height },
      rotated: f.rotated,
      trimmed: f.trimmed,
      spriteSourceSize: f.spriteSourceSize,
      sourceSize: f.sourceSize,
      pivot: f.pivot,
    };
  }
  return JSON.stringify(
    {
      frames: frameHash,
      meta: { app: 'GameBob Sprite Sheet Packer', version: '1.0', size: { w: width, h: height }, scale: 1 },
    },
    null,
    2
  );
}

function buildGenericArrayJson(frames: PackedFrame[], width: number, height: number): string {
  const frameArray = frames.map((f) => ({
    filename: f.name,
    frame: { x: f.x, y: f.y, w: f.width, h: f.height },
    rotated: f.rotated,
    trimmed: f.trimmed,
    spriteSourceSize: f.spriteSourceSize,
    sourceSize: f.sourceSize,
    pivot: f.pivot,
  }));
  return JSON.stringify(
    {
      frames: frameArray,
      meta: { app: 'GameBob Sprite Sheet Packer', version: '1.0', size: { w: width, h: height }, scale: 1 },
    },
    null,
    2
  );
}

function buildGodotJson(frames: PackedFrame[], width: number, height: number): string {
  const godotData = {
    textures: [
      {
        image: 'spritesheet.png',
        size: { w: width, h: height },
        sprites: frames.map((f) => ({
          name: f.name,
          region: [f.x, f.y, f.width, f.height],
          margin: [f.spriteSourceSize.x, f.spriteSourceSize.y, f.sourceSize.w, f.sourceSize.h],
        })),
      },
    ],
  };
  return JSON.stringify(godotData, null, 2);
}

function buildUnityJson(frames: PackedFrame[], width: number, height: number): string {
  const unityFrames = frames.map((f) => ({
    name: f.name,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    pivotX: f.pivot.x,
    pivotY: f.pivot.y,
  }));
  return JSON.stringify({ sprites: unityFrames, meta: { width, height } }, null, 2);
}

export function generateAtlasJson(
  frames: PackedFrame[],
  width: number,
  height: number,
  format: ExportFormat
): string {
  if (format === 'generic-json-hash' || format === 'phaser') {
    return buildGenericHashJson(frames, width, height);
  }
  if (format === 'generic-json-array') {
    return buildGenericArrayJson(frames, width, height);
  }
  if (format === 'godot') {
    return buildGodotJson(frames, width, height);
  }
  if (format === 'unity') {
    return buildUnityJson(frames, width, height);
  }
  return JSON.stringify({ frames, meta: { width, height } }, null, 2);
}

export function generateCssSnippet(frames: PackedFrame[]): string {
  return frames
    .map(
      (f) =>
        `.sprite-${f.name.replace(/[^a-zA-Z0-9_-]/g, '_')} {\n  width: ${f.width}px;\n  height: ${f.height}px;\n  background-position: -${f.x}px -${f.y}px;\n}`
    )
    .join('\n\n');
}

export function generateEngineCodeSnippet(format: ExportFormat): string {
  if (format === 'unity') {
    return `// Unity C# Load Example\nSprite[] sprites = Resources.LoadAll<Sprite>("spritesheet");\nSprite myFrame = System.Array.Find(sprites, s => s.name == "frame_0");`;
  }
  if (format === 'godot') {
    return `# Godot GDScript Load Example\nvar atlas_texture = AtlasTexture.new()\natlas_texture.atlas = load("res://spritesheet.png")\natlas_texture.region = Rect2(0, 0, 32, 32)`;
  }
  if (format === 'phaser') {
    return `// Phaser 3 Load Example\nthis.load.atlas('sheetKey', 'spritesheet.png', 'spritesheet.json');\nconst sprite = this.add.sprite(400, 300, 'sheetKey', 'frame_0');`;
  }
  return `// HTML / JS Load Example\nconst image = new Image();\nimage.src = 'spritesheet.png';`;
}
