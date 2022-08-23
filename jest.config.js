module.exports = {
  collectCoverageFrom: [
    '**/{src,__tests__}/**/*.{js,jsx,ts,tsx}',
    '!packages/**/src/**/*.{spec,stories,styles}.{ts,tsx}',
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
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ['./jest.setup.js', '@testing-library/jest-dom', 'jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/examples'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '@swc/jest',
  },
};
