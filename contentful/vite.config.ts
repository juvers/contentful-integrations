import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import packageJSON from './package.json';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/contentful-graphql',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    entry: 'src/index.ts',
    name: 'contentful-graphql',
    fileName: 'index',
    formats: ['es', 'cjs'],
    external: [
      ...Object.keys(packageJSON.dependencies).map((dep) => {
        if (!['apollo-boost', 'apollo-cache-inmemory'].includes(dep)) {
          return dep;
        }
      }),
    ],
    sourcemap: 'inline',
    lib: {
      entry: 'src/index.ts',
      name: 'contentful-graphql',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJSON.dependencies).map((dep) => {
          if (!['apollo-boost', 'apollo-cache-inmemory'].includes(dep)) {
            return dep;
          }
        }),
      ],
    },
  },
});
