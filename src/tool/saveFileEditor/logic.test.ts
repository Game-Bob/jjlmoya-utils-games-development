import { describe, it, expect } from 'vitest';
import {
  decodeSaveData,
  encodeSaveData,
  applyXor,
  bytesToBase64,
  base64ToBytes,
  strToUtf8Bytes,
  utf8BytesToStr,
  detectFormat,
} from './logic';

describe('saveFileEditor logic', () => {
  const sampleObj = { level: 10, coins: 500, player: 'Hero' };
  const sampleJson = JSON.stringify(sampleObj, null, 2);

  it('converts utf8 bytes back and forth', () => {
    const bytes = strToUtf8Bytes('Hello World!');
    expect(utf8BytesToStr(bytes)).toBe('Hello World!');
  });

  it('converts base64 back and forth', () => {
    const bytes = strToUtf8Bytes(sampleJson);
    const b64 = bytesToBase64(bytes);
    const resultBytes = base64ToBytes(b64);
    expect(utf8BytesToStr(resultBytes)).toBe(sampleJson);
  });

  it('applies XOR correctly', () => {
    const key = 'secret123';
    const bytes = strToUtf8Bytes('GameSaveData');
    const obfuscated = applyXor(bytes, key);
    const restored = applyXor(obfuscated, key);
    expect(utf8BytesToStr(restored)).toBe('GameSaveData');
  });

  it('decodes raw JSON save data', () => {
    const res = decodeSaveData(sampleJson, { method: 'raw', xorKey: '' });
    expect(res.success).toBe(true);
    expect(res.data).toEqual(sampleObj);
  });

  it('encodes and decodes Base64 save data', () => {
    const b64 = encodeSaveData(sampleObj, { method: 'base64', xorKey: '' });
    const decoded = decodeSaveData(b64, { method: 'base64', xorKey: '' });
    expect(decoded.success).toBe(true);
    expect(decoded.data).toEqual(sampleObj);
  });

  it('encodes and decodes XOR + Base64 save data', () => {
    const key = 'my_game_key';
    const encoded = encodeSaveData(sampleObj, { method: 'xor', xorKey: key });
    const decoded = decodeSaveData(encoded, { method: 'xor', xorKey: key });
    expect(decoded.success).toBe(true);
    expect(decoded.data).toEqual(sampleObj);
  });

  it('auto-detects format', () => {
    const rawFormat = detectFormat(sampleJson);
    expect(rawFormat).toBe('raw');

    const b64Str = encodeSaveData(sampleObj, { method: 'base64', xorKey: '' });
    expect(detectFormat(b64Str)).toBe('base64');

    const key = 'my_game_key';
    const xorStr = encodeSaveData(sampleObj, { method: 'xor', xorKey: key });
    expect(detectFormat(xorStr, key)).toBe('xor');
  });
});
