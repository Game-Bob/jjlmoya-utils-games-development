import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: [
      {
        find: /^(.*)\.astro$/,
        replacement: path.resolve(__dirname, './src/tests/mocks/astro_mock.js')
      }
    ]
  },
  ssr: {
    external: ['astro']
  }
});

