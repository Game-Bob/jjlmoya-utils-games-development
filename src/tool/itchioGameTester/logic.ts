export interface WebGameFileInfo {
  name: string;
  size: number;
  isDirectory: boolean;
}

export interface GameValidationIssue {
  type: 'error' | 'warning' | 'info';
  code: string;
  message: string;
  details?: string;
}

export type DetectedGameEngine = 'Godot 4' | 'Godot 3' | 'Unity WebGL' | 'Phaser / Construct' | 'Custom HTML5';

export interface GameValidationResult {
  score: number;
  engine: DetectedGameEngine;
  hasIndexHtml: boolean;
  indexHtmlPath: string;
  totalFiles: number;
  totalUncompressedSize: number;
  issues: GameValidationIssue[];
  fileList: WebGameFileInfo[];
}

export interface ResolutionPreset {
  name: string;
  width: number;
  height: number;
  ratio: string;
}

export const RESOLUTION_PRESETS: ResolutionPreset[] = [
  { name: '16:9 Standard HD', width: 1280, height: 720, ratio: '16:9' },
  { name: '16:9 Itch Classic', width: 960, height: 540, ratio: '16:9' },
  { name: '16:9 Full HD', width: 1920, height: 1080, ratio: '16:9' },
  { name: '4:3 VGA', width: 800, height: 600, ratio: '4:3' },
  { name: '4:3 XGA', width: 1024, height: 768, ratio: '4:3' },
  { name: '3:2 Classic', width: 960, height: 640, ratio: '3:2' },
  { name: '1:1 Square', width: 800, height: 800, ratio: '1:1' },
  { name: 'Itch Desktop Default', width: 960, height: 600, ratio: '16:10' },
];

export function detectGameEngine(files: WebGameFileInfo[]): DetectedGameEngine {
  const fileNames = files.map((f) => f.name.replace(/\\/g, '/'));
  
  if (fileNames.some((n) => n.endsWith('.pck') || n.endsWith('.wasm'))) {
    const isGodot4 = fileNames.some((n) => n.toLowerCase().includes('godot') || n.endsWith('.side.wasm'));
    return isGodot4 ? 'Godot 4' : 'Godot 3';
  }

  if (fileNames.some((n) => n.includes('Build/') || n.endsWith('.framework.js') || n.endsWith('.data'))) {
    return 'Unity WebGL';
  }

  if (fileNames.some((n) => n.includes('phaser') || n.includes('c2runtime') || n.includes('c3runtime'))) {
    return 'Phaser / Construct';
  }

  return 'Custom HTML5';
}

function checkCaseConflict(normalizedPath: string, lowerCaseMap: Map<string, string>): GameValidationIssue | null {
  const lowerPath = normalizedPath.toLowerCase();
  const existing = lowerCaseMap.get(lowerPath);
  if (existing && existing !== normalizedPath) {
    return {
      type: 'warning',
      code: 'CASE_CONFLICT',
      message: 'File name case sensitivity conflict detected',
      details: `${normalizedPath} conflicts with ${existing}. Case differences cause 404 errors on Itch.io Linux/macOS servers.`
    };
  }
  lowerCaseMap.set(lowerPath, normalizedPath);
  return null;
}

function checkFileExtension(file: WebGameFileInfo): GameValidationIssue | null {
  const ext = file.name.split('.').pop() || '';
  if (ext && ext !== ext.toLowerCase() && !file.isDirectory) {
    return {
      type: 'warning',
      code: 'UPPERCASE_EXTENSION',
      message: 'Uppercase file extension detected',
      details: `${file.name} has an uppercase extension .${ext}. Web servers may fail to send correct MIME types.`
    };
  }
  return null;
}

function checkHeavyAudio(file: WebGameFileInfo): GameValidationIssue | null {
  const ext = file.name.split('.').pop() || '';
  if (ext.toLowerCase() === 'wav' && file.size > 5 * 1024 * 1024) {
    return {
      type: 'info',
      code: 'HEAVY_AUDIO',
      message: 'Large uncompressed WAV audio file',
      details: `${file.name} is ${Math.round(file.size / (1024 * 1024))}MB. Convert to OGG or MP3 for faster web loading.`
    };
  }
  return null;
}

function evaluateIndexHtml(hasIndexHtml: boolean, indexHtmlPath: string): { issue: GameValidationIssue | null; penalty: number } {
  if (hasIndexHtml) {
    return { issue: null, penalty: 0 };
  }
  if (indexHtmlPath !== '') {
    return {
      issue: {
        type: 'error',
        code: 'NESTED_INDEX',
        message: 'index.html is nested inside a subfolder',
        details: `Found index.html at ${indexHtmlPath}. Itch.io requires index.html to be located in the root directory.`
      },
      penalty: 50
    };
  }
  return {
    issue: {
      type: 'error',
      code: 'MISSING_INDEX',
      message: 'Missing index.html file',
      details: 'No index.html file was found in the uploaded package. Web builds require an index.html entry point.'
    },
    penalty: 80
  };
}

interface ScanAccumulator {
  score: number;
  hasIndexHtml: boolean;
  indexHtmlPath: string;
  totalFiles: number;
  totalUncompressedSize: number;
}

function checkIndexLocation(normalizedPath: string, acc: ScanAccumulator) {
  if (normalizedPath === 'index.html') {
    acc.hasIndexHtml = true;
    acc.indexHtmlPath = normalizedPath;
  } else if ((normalizedPath.endsWith('/index.html') || normalizedPath.endsWith('\\index.html')) && !acc.hasIndexHtml) {
    acc.indexHtmlPath = normalizedPath;
  }
}

function processSingleFile(file: WebGameFileInfo, lowerCaseMap: Map<string, string>, acc: ScanAccumulator, issues: GameValidationIssue[]) {
  if (!file.isDirectory) {
    acc.totalFiles++;
    acc.totalUncompressedSize += file.size;
  }

  const normalizedPath = file.name.replace(/\\/g, '/');
  const caseIssue = checkCaseConflict(normalizedPath, lowerCaseMap);
  if (caseIssue) {
    issues.push(caseIssue);
    acc.score -= 10;
  }

  checkIndexLocation(normalizedPath, acc);

  const extIssue = checkFileExtension(file);
  if (extIssue) {
    issues.push(extIssue);
    acc.score -= 5;
  }

  const audioIssue = checkHeavyAudio(file);
  if (audioIssue) {
    issues.push(audioIssue);
    acc.score -= 2;
  }
}

function appendEngineAndSizeIssues(engine: DetectedGameEngine, totalUncompressedSize: number, score: number, issues: GameValidationIssue[]): number {
  let updatedScore = score;
  if (engine === 'Godot 4') {
    issues.push({
      type: 'info',
      code: 'GODOT4_HEADERS',
      message: 'Godot 4 Web export detected',
      details: 'Ensure "SharedArrayBuffer support" or Cross-Origin Isolation headers are enabled in your Itch.io game edit page.'
    });
  }

  if (totalUncompressedSize > 500 * 1024 * 1024) {
    issues.push({
      type: 'warning',
      code: 'LARGE_BUILD',
      message: 'Total build size exceeds 500MB',
      details: 'Large web builds may experience high bounce rates or memory crashes on mobile browsers.'
    });
    updatedScore -= 15;
  }
  return updatedScore;
}

export function validateGameFiles(files: WebGameFileInfo[]): GameValidationResult {
  const issues: GameValidationIssue[] = [];
  const engine = detectGameEngine(files);
  const lowerCaseMap = new Map<string, string>();
  const acc: ScanAccumulator = { score: 100, hasIndexHtml: false, indexHtmlPath: '', totalFiles: 0, totalUncompressedSize: 0 };

  for (const file of files) {
    processSingleFile(file, lowerCaseMap, acc, issues);
  }

  const indexEval = evaluateIndexHtml(acc.hasIndexHtml, acc.indexHtmlPath);
  if (indexEval.issue) {
    issues.unshift(indexEval.issue);
    acc.score -= indexEval.penalty;
  }

  const finalScore = appendEngineAndSizeIssues(engine, acc.totalUncompressedSize, acc.score, issues);

  return {
    score: Math.max(0, finalScore),
    engine,
    hasIndexHtml: acc.hasIndexHtml,
    indexHtmlPath: acc.indexHtmlPath,
    totalFiles: acc.totalFiles,
    totalUncompressedSize: acc.totalUncompressedSize,
    issues,
    fileList: files,
  };
}

export function calculateAspectRatio(width: number, height: number): string {
  if (!width || !height) return '16:9';
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  const wRatio = width / divisor;
  const hRatio = height / divisor;

  const ratioKey = `${wRatio}:${hRatio}`;
  const knownRatios: Record<string, string> = {
    '16:9': '16:9',
    '4:3': '4:3',
    '3:2': '3:2',
    '16:10': '16:10',
    '1:1': '1:1',
  };

  if (knownRatios[ratioKey]) {
    return knownRatios[ratioKey];
  }

  const decimal = width / height;
  if (Math.abs(decimal - 16 / 9) < 0.05) return '16:9 Approx';
  if (Math.abs(decimal - 4 / 3) < 0.05) return '4:3 Approx';

  return ratioKey;
}

export function generateItchioEmbedConfig(width: number, height: number, orientation: 'landscape' | 'portrait' = 'landscape') {
  return {
    viewportWidth: width,
    viewportHeight: height,
    embedMode: 'Embed in page',
    scrollbars: false,
    fullscreenButton: true,
    orientation,
    codeSnippet: `Dimensions: ${width}px x ${height}px\nEmbed Mode: Embed in page\nMobile Orientation: ${orientation}\nFullscreen Button: Enabled`
  };
}
