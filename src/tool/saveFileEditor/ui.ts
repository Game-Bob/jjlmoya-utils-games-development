export interface SaveFileEditorUI extends Record<string, string> {
  title: string;
  subtitle: string;
  dropSaveFile: string;
  orSelectFile: string;
  encryptionMethod: string;
  methodBase64: string;
  methodXor: string;
  methodRaw: string;
  xorKeyLabel: string;
  xorKeyPlaceholder: string;
  jsonRawTitle: string;
  encodeAndDownload: string;
  copyEncoded: string;
  copiedNotice: string;
  decodedKeysCount: string;
  dataSize: string;
  detectedFormat: string;
  exportPreviewLabel: string;
  decodePanelTitle: string;
  exportPanelTitle: string;
  decodeError: string;
  bytesUnit: string;
}
