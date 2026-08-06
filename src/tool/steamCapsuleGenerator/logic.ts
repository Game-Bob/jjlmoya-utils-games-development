export interface SteamAssetSpec {
  id: string;
  name: string;
  width: number;
  height: number;
  hdWidth: number;
  hdHeight: number;
  aspectRatio: string;
  format: 'png' | 'jpg';
  required: boolean;
  category: 'store' | 'library' | 'community';
  safeZone: {
    xRatio: number;
    yRatio: number;
    wRatio: number;
    hRatio: number;
    label: string;
  } | null;
}

export interface CropBounds {
  sx: number;
  sy: number;
  sWidth: number;
  sHeight: number;
}

export interface FocalPoint {
  x: number;
  y: number;
  zoom: number;
}

export interface ToolState {
  gameTitle: string;
  developerName: string;
  publisherName: string;
  description: string;
  discountPct: string;
  originalPrice: string;
  finalPrice: string;
  reviewSummary: string;
  tags: string[];
  focalPoint: FocalPoint;
  selectedTab: 'store' | 'library' | 'assets';
  showSafeZones: boolean;
}

export const STEAM_ASSETS: SteamAssetSpec[] = [
  {
    id: 'header-capsule',
    name: 'Header Capsule',
    width: 460,
    height: 215,
    hdWidth: 920,
    hdHeight: 430,
    aspectRatio: '2.14:1',
    format: 'jpg',
    required: true,
    category: 'store',
    safeZone: { xRatio: 0.60, yRatio: 0.70, wRatio: 0.40, hRatio: 0.30, label: 'Discount Badge' }
  },
  {
    id: 'small-capsule',
    name: 'Small Capsule',
    width: 231,
    height: 87,
    hdWidth: 462,
    hdHeight: 174,
    aspectRatio: '2.65:1',
    format: 'jpg',
    required: true,
    category: 'store',
    safeZone: { xRatio: 0.55, yRatio: 0.60, wRatio: 0.45, hRatio: 0.40, label: 'Wishlist Badge' }
  },
  {
    id: 'main-capsule',
    name: 'Main Capsule',
    width: 616,
    height: 353,
    hdWidth: 1232,
    hdHeight: 706,
    aspectRatio: '1.74:1',
    format: 'jpg',
    required: true,
    category: 'store',
    safeZone: { xRatio: 0.60, yRatio: 0.75, wRatio: 0.40, hRatio: 0.25, label: 'Featured Price' }
  },
  {
    id: 'vertical-capsule',
    name: 'Vertical Library Capsule',
    width: 300,
    height: 450,
    hdWidth: 600,
    hdHeight: 900,
    aspectRatio: '2:3',
    format: 'jpg',
    required: true,
    category: 'library',
    safeZone: { xRatio: 0.05, yRatio: 0.80, wRatio: 0.90, hRatio: 0.18, label: 'Library Banner' }
  },
  {
    id: 'library-hero',
    name: 'Library Hero',
    width: 1920,
    height: 620,
    hdWidth: 3840,
    hdHeight: 1240,
    aspectRatio: '3.1:1',
    format: 'jpg',
    required: true,
    category: 'library',
    safeZone: { xRatio: 0.05, yRatio: 0.40, wRatio: 0.45, hRatio: 0.50, label: 'Logo Overlay' }
  },
  {
    id: 'library-logo',
    name: 'Library Logo',
    width: 1280,
    height: 720,
    hdWidth: 1280,
    hdHeight: 720,
    aspectRatio: '16:9',
    format: 'png',
    required: true,
    category: 'library',
    safeZone: null
  },
  {
    id: 'community-icon',
    name: 'Community Icon',
    width: 32,
    height: 32,
    hdWidth: 184,
    hdHeight: 184,
    aspectRatio: '1:1',
    format: 'png',
    required: true,
    category: 'community',
    safeZone: null
  }
];

export interface CropInput {
  srcWidth: number;
  srcHeight: number;
  targetWidth: number;
  targetHeight: number;
  focusX: number;
  focusY: number;
  zoom?: number;
}

export function calculateCropBounds(input: CropInput): CropBounds {
  const fx = Math.max(0, Math.min(1, input.focusX));
  const fy = Math.max(0, Math.min(1, input.focusY));
  const zoom = Math.max(1, Math.min(3, input.zoom ?? 1));
  const targetAspect = input.targetWidth / input.targetHeight;
  const srcAspect = input.srcWidth / input.srcHeight;

  const baseHeight = srcAspect > targetAspect ? input.srcHeight / zoom : (input.srcWidth / zoom) / targetAspect;
  const baseWidth = srcAspect > targetAspect ? baseHeight * targetAspect : input.srcWidth / zoom;

  const sx = Math.max(0, Math.min(input.srcWidth - baseWidth, fx * input.srcWidth - baseWidth / 2));
  const sy = Math.max(0, Math.min(input.srcHeight - baseHeight, fy * input.srcHeight - baseHeight / 2));

  return {
    sx: Math.round(sx),
    sy: Math.round(sy),
    sWidth: Math.round(baseWidth),
    sHeight: Math.round(baseHeight)
  };
}

export function validateImageDimensions(
  srcWidth: number,
  srcHeight: number,
  target: SteamAssetSpec
): { isSufficient: boolean; ratioDiff: number } {
  const isSufficient = srcWidth >= target.hdWidth && srcHeight >= target.hdHeight;
  const targetAspect = target.hdWidth / target.hdHeight;
  const srcAspect = srcWidth / srcHeight;
  const ratioDiff = Math.abs(targetAspect - srcAspect) / targetAspect;

  return {
    isSufficient,
    ratioDiff: Math.round(ratioDiff * 100) / 100
  };
}

export function getInitialState(): ToolState {
  return {
    gameTitle: 'Super Crunch Bros: GameBob Edition',
    developerName: 'GameBob Studios',
    publisherName: 'GameBob & Bank Loans Inc.',
    description: 'Developed under extreme crunch with 99% espresso, 1% spaghetti code, and zero sleep.',
    discountPct: '-50%',
    originalPrice: '$29.99',
    finalPrice: '$14.99',
    reviewSummary: 'Overwhelmingly Positive (9,999 Coffee Cups)',
    tags: ['Indie', 'GameBob', 'Crunch', 'OverScoped', 'Singleplayer'],
    focalPoint: { x: 0.5, y: 0.5, zoom: 1 },
    selectedTab: 'store',
    showSafeZones: true
  };
}

const STORAGE_KEY = 'steam_capsule_generator_state_v2';

export function saveStateToStorage(state: Partial<ToolState>): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = loadStateFromStorage();
    const merged = { ...existing, ...state };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    return;
  }
}

function parseStr(val: unknown, fallback: string): string {
  return typeof val === 'string' ? val : fallback;
}

function parseFocal(raw: unknown): FocalPoint {
  const fallback = getInitialState().focalPoint;
  if (!raw || typeof raw !== 'object') return fallback;
  const obj = raw as Record<string, unknown>;
  return {
    x: typeof obj.x === 'number' ? obj.x : fallback.x,
    y: typeof obj.y === 'number' ? obj.y : fallback.y,
    zoom: typeof obj.zoom === 'number' ? obj.zoom : fallback.zoom
  };
}

export function loadStateFromStorage(): ToolState {
  const fallback = getInitialState();
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const p = JSON.parse(raw);
    return {
      gameTitle: parseStr(p.gameTitle, fallback.gameTitle),
      developerName: parseStr(p.developerName, fallback.developerName),
      publisherName: parseStr(p.publisherName, fallback.publisherName),
      description: parseStr(p.description, fallback.description),
      discountPct: parseStr(p.discountPct, fallback.discountPct),
      originalPrice: parseStr(p.originalPrice, fallback.originalPrice),
      finalPrice: parseStr(p.finalPrice, fallback.finalPrice),
      reviewSummary: parseStr(p.reviewSummary, fallback.reviewSummary),
      tags: Array.isArray(p.tags) ? p.tags : fallback.tags,
      focalPoint: parseFocal(p.focalPoint),
      selectedTab: ['store', 'library', 'assets'].includes(p.selectedTab) ? p.selectedTab : fallback.selectedTab,
      showSafeZones: typeof p.showSafeZones === 'boolean' ? p.showSafeZones : fallback.showSafeZones
    };
  } catch {
    return fallback;
  }
}
