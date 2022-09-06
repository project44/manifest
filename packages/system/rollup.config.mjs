import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import nodeExternals from 'rollup-plugin-node-externals';
import fs from 'fs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

const PACKAGE_JSON = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url).pathname),
);

/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      dir: path.dirname(PACKAGE_JSON.main),
      preserveModules: true,
      exports: 'named',
    },
    {
      format: 'esm',
      dir: path.dirname(PACKAGE_JSON.module),
      preserveModules: true,
    },
  ],
  plugins: [
    commonjs(),
    nodeExternals(),
    nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    json(),
  ],
};
