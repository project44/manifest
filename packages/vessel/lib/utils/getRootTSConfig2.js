'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

const parseJSON = require('./parseJSON2.js');

const constants = require('../constants2.js');

let tsconfigJson;

function getRootTSConfig() {
  if (tsconfigJson === undefined) {
    tsconfigJson = parseJSON.parseJSON(constants.TSCONFIG_JSON_PATH);
  }

  return tsconfigJson;
}

exports.getRootTSConfig = getRootTSConfig;
//# sourceMappingURL=getRootTSConfig2.js.map
