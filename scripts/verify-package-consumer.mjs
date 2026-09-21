import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fixturePath = join(repositoryRoot, 'tests/fixtures/package-consumer');
const temporaryRoot = mkdtempSync(join(tmpdir(), 'gamebob-package-consumer-'));
const packDirectory = join(temporaryRoot, 'pack');
const consumerDirectory = join(temporaryRoot, 'consumer');
const npmEntry = process.env.npm_execpath;

function runNpm(args, cwd, capture = false) {
    if (!npmEntry) {
        throw new Error('npm_execpath is unavailable. Run this verifier through npm.');
    }
    const result = spawnSync(process.execPath, [npmEntry, ...args], {
        cwd,
        encoding: 'utf8',
        stdio: capture ? 'pipe' : 'inherit'
    });
    if (result.status !== 0) {
        throw new Error(result.stderr || `npm ${args.join(' ')} failed`);
    }
    return result.stdout;
}

function runNode(entry, args, cwd) {
    const result = spawnSync(process.execPath, [entry, ...args], {
        cwd,
        encoding: 'utf8',
        stdio: 'inherit'
    });
    if (result.status !== 0) {
        throw new Error(`${entry} ${args.join(' ')} failed`);
    }
}

try {
    mkdirSync(packDirectory);
    const packOutput = runNpm(['pack', '--json', '--pack-destination', packDirectory], repositoryRoot, true);
    const packResult = JSON.parse(packOutput)[0];
    const tarballPath = join(packDirectory, packResult.filename);

    cpSync(fixturePath, consumerDirectory, { recursive: true });
    const consumerPackagePath = join(consumerDirectory, 'package.json');
    const consumerPackage = JSON.parse(readFileSync(consumerPackagePath, 'utf8'));
    consumerPackage.dependencies['@jjlmoya/utils-games-development'] = `file:${tarballPath.replaceAll('\\', '/')}`;
    writeFileSync(consumerPackagePath, `${JSON.stringify(consumerPackage, null, 2)}\n`);

    runNpm(['install', '--no-audit', '--no-fund'], consumerDirectory);
    runNode(join(consumerDirectory, 'node_modules/astro/bin/astro.mjs'), ['build'], consumerDirectory);

    const installedPackage = join(consumerDirectory, 'node_modules/@jjlmoya/utils-games-development');
    const contract = JSON.parse(readFileSync(join(repositoryRoot, 'public-api.contract.json'), 'utf8'));
    const leakedPaths = contract.excludedPackagePaths
        .map((path) => path.replace(/^package\//, ''))
        .filter((path) => existsSync(join(installedPackage, path)));
    if (leakedPaths.length > 0) {
        throw new Error(`Desktop-only paths leaked into npm package: ${leakedPaths.join(', ')}`);
    }
    if (!existsSync(join(consumerDirectory, 'dist/index.html'))) {
        throw new Error('External consumer build did not produce dist/index.html');
    }

    process.stdout.write(`Verified ${basename(tarballPath)} in an external Astro consumer.\n`);
} finally {
    rmSync(temporaryRoot, { recursive: true, force: true });
}
