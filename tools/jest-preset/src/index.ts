import fs from 'fs';
import path from 'path';

const setupFilesAfterEnv: string[] = [];
const setupFilePath = path.join(process.env.MOON_WORKSPACE_ROOT ?? process.cwd(), 'tests/setup.ts');

// Only include the file if it exists, otherwise Jest throws an error
if (fs.existsSync(setupFilePath)) {
  setupFilesAfterEnv.push(setupFilePath);
}

const config = {
  collectCoverage: false,
  collectCoverageFrom: ['**/{src,tests}/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'node_modules/',
    'build/',
    'coverage/',
    'dist/',
    'dts/',
    'esm/',
    'lib/',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|gql|graphql|yml|yaml)$':
      require.resolve('./fileMock.js'),
  },
  setupFilesAfterEnv,
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

export default config;
