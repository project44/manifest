'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

const path = require('path');

const _interopDefault = e => e && e.__esModule ? e : {
  default: e
};

const path__default = /*#__PURE__*/_interopDefault(path);

const IGNORE_LIST = ['node_modules/', 'build/', 'cjs/', 'coverage/', 'dist/', 'dts/', 'esm/', 'lib/', 'mjs/', 'umd/'];
const ROOT = process.env.BEEMO_ROOT ?? process.cwd();
const TSCONFIG_JSON_PATH = path__default.default.join(ROOT, 'tsconfig.json');
const PACKAGE_JSON_PATH = path__default.default.join(ROOT, 'package.json');
exports.IGNORE_LIST = IGNORE_LIST;
exports.PACKAGE_JSON_PATH = PACKAGE_JSON_PATH;
exports.ROOT = ROOT;
exports.TSCONFIG_JSON_PATH = TSCONFIG_JSON_PATH;
//# sourceMappingURL=constants2.js.map
