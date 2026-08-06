import type { GamesToolEntry, ToolLocaleContent } from '../../types';

export interface SteamCapsuleGeneratorUI {
  [key: string]: string;
  uploadTitle: string;
  uploadHint: string;
  chooseFile: string;
  minimumSize: string;
  supportedFormats: string;
  invalidImage: string;
  sourcePreview: string;
  focalPoint: string;
  focalHint: string;
  horizontalFocus: string;
  verticalFocus: string;
  resetFocus: string;
  outputPreview: string;
  safeZone: string;
  dimensions: string;
  downloadPng: string;
  downloadZip: string;
  buildingZip: string;
  zipReady: string;
  localOnly: string;
  headerCapsule: string;
  mainCapsule: string;
  verticalCapsule: string;
  communityIcon: string;
  ready: string;
  downloadError: string;
}

export type SteamCapsuleGeneratorLocaleContent = ToolLocaleContent<SteamCapsuleGeneratorUI>;

export const steamCapsuleGenerator: GamesToolEntry<SteamCapsuleGeneratorUI> = {
  id: 'steam-capsule-generator',
  icons: { bg: 'mdi:gamepad-variant', fg: 'mdi:image-multiple' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
  },
};
