'use strict';

const fs = require('fs');

const constants = require('../constants2.js');

const path = require('path');

const _interopDefault = e => e && e.__esModule ? e : {
  default: e
};

const fs__default = /*#__PURE__*/_interopDefault(fs);

const path__default = /*#__PURE__*/_interopDefault(path);

const ROOT = process.env.BEEMO_ROOT ?? process.cwd();
const setupFilesAfterEnv = [];
const setupFilePath = path__default.default.join(ROOT, 'jest.setup.js'); // Only include the setup file if available.

if (fs__default.default.existsSync(setupFilePath)) {
  setupFilesAfterEnv.push(setupFilePath);
}

const tool = process.beemo.tool;
const projects = tool.config.settings.projects;
const config = {
  collectCoverageFrom: ['**/{src,__tests__}/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: constants.IGNORE_LIST.map(path => path.replace(/\*+/g, '.*')),
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  globals: {
    [`__DEV__`]: true
  },
  setupFilesAfterEnv,
  testEnvironment: 'node',
  testMatch: ['**/{src,test,tests,__tests__}/**/*.spec.{js,jsx,ts,tsx}'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      rootMode: 'upward'
    }]
  }
};

if (tool.package.workspaces && projects) {
  config.projects = tool.project.getWorkspaceGlobs({
    relative: true
  }).map(wsPath => `<rootDir>/${wsPath}`);
}

module.exports = config;
//# sourceMappingURL=jest2.js.map
