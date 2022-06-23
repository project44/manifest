import path from 'path';

export const IGNORE_LIST = [
  'node_modules/',
  'build/',
  'cjs/',
  'coverage/',
  'dist/',
  'dts/',
  'esm/',
  'lib/',
  'mjs/',
  'umd/',
];

export const ROOT = process.env.BEEMO_ROOT ?? process.cwd();

export const TSCONFIG_JSON_PATH = path.join(ROOT, 'tsconfig.json');

export const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
