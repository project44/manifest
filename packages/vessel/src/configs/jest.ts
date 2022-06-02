import fs from 'fs';
import { IGNORE_LIST } from '../constants';
import type { JestConfig } from '@beemo/driver-jest';
import path from 'path';

const ROOT = process.env.BEEMO_ROOT ?? process.cwd();
const setupFilesAfterEnv: string[] = [];
const setupFilePath = path.join(ROOT, 'jest.setup.js');

// Only include the setup file if available.
if (fs.existsSync(setupFilePath)) {
  setupFilesAfterEnv.push(setupFilePath);
}

const { tool } = process.beemo;
const { projects } = tool.config.settings;

const config: JestConfig = {
  collectCoverageFrom: ['**/{src,__tests__}/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: IGNORE_LIST.map(path => path.replace(/\*+/g, '.*')),
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv,
  testEnvironment: 'node',
  testMatch: ['**/{src,test,tests,__tests__}/**/*.spec.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
  },
};

if (tool.package.workspaces && projects) {
  config.projects = tool.project
    .getWorkspaceGlobs({ relative: true })
    .map((wsPath: string) => `<rootDir>/${wsPath}`);
}

export default config;
