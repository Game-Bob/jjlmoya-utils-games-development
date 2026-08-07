export interface ParsedLoopMetadata {
  loopStart?: number;
  loopEnd?: number;
}

export function parseWavLoopTags(bytes: Uint8Array): ParsedLoopMetadata {
  const result: ParsedLoopMetadata = {};
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length - 12;

  for (let i = 0; i < len; i++) {
    const isSmpl = bytes[i] === 0x73 && bytes[i + 1] === 0x6d && bytes[i + 2] === 0x70 && bytes[i + 3] === 0x6c;
    if (isSmpl && view.getUint32(i + 36, true) > 0 && i + 56 <= bytes.length) {
      result.loopStart = view.getUint32(i + 44, true);
      result.loopEnd = view.getUint32(i + 48, true);
      break;
    }
  }
  return result;
}

export function assignLoopKey(key: string, val: number, res: ParsedLoopMetadata): void {
  if (key === 'LOOPSTART' || key === 'LOOP_START') res.loopStart = val;
  else if (key === 'LOOPEND' || key === 'LOOP_END') res.loopEnd = val;
  else if ((key === 'LOOPLENGTH' || key === 'LOOP_LENGTH') && res.loopStart !== undefined) {
    res.loopEnd = res.loopStart + val;
  }
}

export function parseCommentKV(kv: string, res: ParsedLoopMetadata): void {
  const parts = kv.split('=');
  if (parts.length < 2) return;
  const key = (parts[0] ?? '').toUpperCase().trim();
  const val = parseInt((parts[1] ?? '').trim(), 10);
  if (!isNaN(val)) {
    assignLoopKey(key, val, res);
  }
}

export function isVorbisHeaderAt(bytes: Uint8Array, idx: number): boolean {
  return (
    bytes[idx] === 0x03 &&
    bytes[idx + 1] === 118 &&
    bytes[idx + 2] === 111 &&
    bytes[idx + 3] === 114 &&
    bytes[idx + 4] === 98 &&
    bytes[idx + 5] === 105 &&
    bytes[idx + 6] === 115
  );
}

export function findVorbisHeaderPos(bytes: Uint8Array): number {
  const len = bytes.length - 7;
  for (let i = 0; i < len; i++) {
    if (isVorbisHeaderAt(bytes, i)) return i + 7;
  }
  return -1;
}

export function parseOggVorbisComments(bytes: Uint8Array): ParsedLoopMetadata {
  const res: ParsedLoopMetadata = {};
  let pos = findVorbisHeaderPos(bytes);
  if (pos === -1 || pos + 4 > bytes.length) return res;

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  pos += 4 + view.getUint32(pos, true);
  if (pos + 4 > bytes.length) return res;

  const userCommentCount = view.getUint32(pos, true);
  pos += 4;
  const decoder = new TextDecoder('utf-8');

  for (let c = 0; c < userCommentCount && pos + 4 <= bytes.length; c++) {
    const commentLen = view.getUint32(pos, true);
    pos += 4;
    if (pos + commentLen > bytes.length) break;
    parseCommentKV(decoder.decode(bytes.subarray(pos, pos + commentLen)), res);
    pos += commentLen;
  }

  return res;
}

export function getFileSignature(bytes: Uint8Array): string {
  if (bytes.length < 4) return '';
  return String.fromCharCode(bytes[0] ?? 0, bytes[1] ?? 0, bytes[2] ?? 0, bytes[3] ?? 0);
}

export function parseAudioLoopMetadata(bytes: Uint8Array): ParsedLoopMetadata {
  const sig = getFileSignature(bytes);
  if (sig === 'OggS') return parseOggVorbisComments(bytes);
  if (sig === 'RIFF') return parseWavLoopTags(bytes);
  return {};
}
