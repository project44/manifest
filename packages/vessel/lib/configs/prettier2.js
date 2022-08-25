'use strict';

const constants = require('../constants2.js');

const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  ignore: [...constants.IGNORE_LIST, // Config files
  'CHANGELOG.md', 'package.json', 'tsconfig.json', 'tsconfig.*.json', '*.d.ts'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false
};
module.exports = config;
//# sourceMappingURL=prettier2.js.map
