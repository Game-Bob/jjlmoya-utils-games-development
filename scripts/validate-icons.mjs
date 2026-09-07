#!/usr/bin/env node

import { createRequire } from 'node:module';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const packageJsonPath = require.resolve('@iconify-json/mdi/package.json');
const packageRoot = dirname(packageJsonPath);
const iconSet = JSON.parse(readFileSync(join(packageRoot, 'icons.json'), 'utf8'));
const availableIcons = new Set([
  ...Object.keys(iconSet.icons ?? {}),
  ...Object.keys(iconSet.aliases ?? {}),
]);

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = resolve(repoRoot, 'src');
const extensions = new Set(['.astro', '.js', '.mjs', '.ts', '.tsx']);
const iconPattern = /\bmdi:([a-z0-9-]+)\b/g;
const failures = [];
let references = 0;

function walk(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== 'tests') {
        walk(path);
      }
      continue;
    }
    if (!extensions.has(path.slice(path.lastIndexOf('.')))) continue;

    const source = readFileSync(path, 'utf8');
    for (const match of source.matchAll(iconPattern)) {
      references += 1;
      const iconName = match[1];
      if (availableIcons.has(iconName)) continue;

      const line = source.slice(0, match.index).split('\n').length;
      failures.push(`${relative(repoRoot, path)}:${line} — mdi:${iconName}`);
    }
  }
}

walk(sourceRoot);

if (failures.length > 0) {
  console.error('Invalid MDI icons found:');
  for (const failure of failures) console.error(`- ${failure}`);
  console.error(`Checked ${references} MDI icon references against @iconify-json/mdi.`);
  process.exitCode = 1;
} else {
  console.log(`MDI icon validation passed: ${references} references checked.`);
}
