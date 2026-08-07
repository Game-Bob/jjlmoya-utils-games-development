export type EncryptionMethod = 'base64' | 'xor' | 'raw';

export interface ObfuscationOptions {
  method: EncryptionMethod;
  xorKey: string;
}

export interface ParseResult {
  success: boolean;
  data: unknown | null;
  error?: string;
  detectedMethod?: EncryptionMethod;
}

export function strToUtf8Bytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

export function utf8BytesToStr(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes);
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]!);
  }
  return btoa(binary);
}

export function base64ToBytes(base64Str: string): Uint8Array {
  const cleanStr = base64Str.trim().replace(/\s+/g, '');
  const binary = atob(cleanStr);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export function applyXor(data: Uint8Array, keyStr: string): Uint8Array {
  if (!keyStr) return data;
  const keyBytes = strToUtf8Bytes(keyStr);
  if (keyBytes.length === 0) return data;

  const result = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i]! ^ keyBytes[i % keyBytes.length]!;
  }
  return result;
}

function getDecodedString(trimmed: string, options: ObfuscationOptions): string {
  if (options.method === 'raw') return trimmed;
  const bytes = base64ToBytes(trimmed);
  if (options.method === 'base64') return utf8BytesToStr(bytes);
  if (options.method === 'xor') {
    return utf8BytesToStr(applyXor(bytes, options.xorKey));
  }
  return trimmed;
}

export function decodeSaveData(rawContent: string, options: ObfuscationOptions): ParseResult {
  const trimmed = rawContent.trim();
  if (!trimmed) {
    return { success: false, data: null, error: 'Empty file' };
  }

  try {
    const decodedText = getDecodedString(trimmed, options);
    return {
      success: true,
      data: JSON.parse(decodedText),
      detectedMethod: options.method,
    };
  } catch (err: unknown) {
    return {
      success: false,
      data: null,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export function encodeSaveData(data: unknown, options: ObfuscationOptions): string {
  const jsonStr = JSON.stringify(data, null, 2);
  
  if (options.method === 'raw') {
    return jsonStr;
  }

  const utf8Bytes = strToUtf8Bytes(jsonStr);

  if (options.method === 'base64') {
    return bytesToBase64(utf8Bytes);
  }

  if (options.method === 'xor') {
    const xorBytes = applyXor(utf8Bytes, options.xorKey);
    return bytesToBase64(xorBytes);
  }

  return jsonStr;
}

export function detectFormat(content: string, xorKey: string = ''): EncryptionMethod {
  const trimmed = content.trim();
  if (!trimmed) return 'raw';

  try {
    JSON.parse(trimmed);
    return 'raw';
  } catch {
    void 0;
  }

  if (xorKey) {
    try {
      const bytes = base64ToBytes(trimmed);
      const text = utf8BytesToStr(applyXor(bytes, xorKey));
      JSON.parse(text);
      return 'xor';
    } catch {
      void 0;
    }
  }

  try {
    const bytes = base64ToBytes(trimmed);
    const text = utf8BytesToStr(bytes);
    JSON.parse(text);
    return 'base64';
  } catch {
    void 0;
  }

  return 'raw';
}
