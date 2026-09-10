// Reads pixel dimensions of JPEG, PNG and WebP files so every <img> gets
// width/height attributes (prevents layout shift) without any dependencies.
import { readFileSync } from 'node:fs';

const cache = new Map();

export function imageSize(file) {
  if (cache.has(file)) return cache.get(file);
  const b = readFileSync(file);
  let size = null;

  if (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') {
    size = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  } else if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m === 0xff) { i++; continue; }
      if (m === 0xd8 || m === 0x01 || (m >= 0xd0 && m <= 0xd7)) { i += 2; continue; }
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        size = { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
        break;
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  } else if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = b.toString('ascii', 12, 16);
    if (chunk === 'VP8X') size = { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
    else if (chunk === 'VP8 ') size = { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    else if (chunk === 'VP8L') {
      const bits = b.readUInt32LE(21);
      size = { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
    }
  }

  if (!size) throw new Error(`Unsupported image format: ${file}`);
  cache.set(file, size);
  return size;
}
