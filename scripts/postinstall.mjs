import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const libDir = dirname(fileURLToPath(import.meta.url));
const toolsDir = join(libDir, '../src/tool');

const inNodeModules = libDir.includes('node_modules');
const projectRoot = inNodeModules ? join(libDir, '../../../..') : join(libDir, '..');
const categoryKey = JSON.parse(readFileSync(join(libDir, '../package.json'), 'utf8')).name.replace('@jjlmoya/utils-', '');
const destDir = join(projectRoot, `public/_utilities/${categoryKey}/styles`);

mkdirSync(destDir, { recursive: true });

const tools = readdirSync(toolsDir, { withFileTypes: true }).filter(d => d.isDirectory());
for (const tool of tools) {
    const toolDir = join(toolsDir, tool.name);
    let files;
    try { files = readdirSync(toolDir).filter(f => f.endsWith('.css')); }
    catch { continue; }
    for (const file of files) {
        writeFileSync(join(destDir, file), readFileSync(join(toolDir, file)));
        console.log(`[@jjlmoya/utils-${categoryKey}] copied ${file}`);
    }
}
