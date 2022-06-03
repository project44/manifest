import { IGNORE_LIST } from '../constants';
import { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  ignore: [
    ...IGNORE_LIST,
    // Config files
    'CHANGELOG.md',
    'package.json',
    'tsconfig.json',
    'tsconfig.*.json',
    '*.d.ts',
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

export default config;
