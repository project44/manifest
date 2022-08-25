'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

const fs = require('fs');

const _interopDefault = e => e && e.__esModule ? e : {
  default: e
};

const fs__default = /*#__PURE__*/_interopDefault(fs);

function parseJSON(filePath) {
  const content = fs__default.default.readFileSync(filePath, 'utf8').split('\n') // Remove comments from JSON files
  .filter(line => !/^\s*(#|\/)/.test(line)).join('\n');
  return JSON.parse(content);
}

exports.parseJSON = parseJSON;
//# sourceMappingURL=parseJSON2.js.map
