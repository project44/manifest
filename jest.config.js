module.exports = {
  collectCoverageFrom: [
    '**/{src,__tests__}/**/*.{js,jsx,ts,tsx}',
    '!**/src/**/*.{spec,stories,styles}.{ts,tsx}',
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
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
    '<rootDir>/apps',
    '<rootDir>/examples',
  ],
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/apps', '<rootDir>/examples'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '@swc/jest',
  },
};
