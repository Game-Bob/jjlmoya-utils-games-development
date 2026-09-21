import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contract = JSON.parse(readFileSync(join(repositoryRoot, 'public-api.contract.json'), 'utf8'));
const packageJson = JSON.parse(readFileSync(join(repositoryRoot, 'package.json'), 'utf8'));
const sourceExtensions = new Set(['.astro', '.js', '.mjs', '.ts']);

function collectFiles(path) {
    const absolutePath = join(repositoryRoot, path);
    if (!statSync(absolutePath).isDirectory()) {
        return [absolutePath];
    }
    return readdirSync(absolutePath, { withFileTypes: true }).flatMap((entry) => {
        const child = join(absolutePath, entry.name);
        if (entry.isDirectory()) {
            return collectFiles(relative(repositoryRoot, child));
        }
        return [child];
    });
}

function extensionOf(path) {
    const match = path.match(/\.[^.]+$/);
    return match?.[0] ?? '';
}

const violations = [];
const publicFiles = contract.publicSourceRoots.flatMap(collectFiles)
    .filter((path) => sourceExtensions.has(extensionOf(path)));

for (const file of publicFiles) {
    const source = readFileSync(file, 'utf8');
    for (const forbidden of contract.forbiddenPublicDependencies) {
        if (source.includes(forbidden)) {
            violations.push(`${relative(repositoryRoot, file)} references ${forbidden}`);
        }
    }
}

for (const dependency of Object.keys(packageJson.dependencies ?? {})) {
    if (dependency.startsWith('@tauri-apps/')) {
        violations.push(`runtime dependency ${dependency} belongs in Desktop development dependencies`);
    }
}

const expectedExports = Object.values(contract.surfaces).flat();
for (const exportPath of expectedExports) {
    if (!(exportPath in packageJson.exports)) {
        violations.push(`missing public export ${exportPath}`);
    }
}

const declaredFiles = new Set(packageJson.files ?? []);
for (const sourceRoot of contract.publicSourceRoots) {
    if (!declaredFiles.has(sourceRoot)) {
        violations.push(`public source root ${sourceRoot} is missing from package files`);
    }
}

if (declaredFiles.has('src')) {
    violations.push('package files exposes the complete src tree');
}

if (violations.length > 0) {
    throw new Error(`Product boundary violations:\n${violations.join('\n')}`);
}

process.stdout.write(`Verified ${publicFiles.length} public source files across ${expectedExports.length} exports.\n`);
