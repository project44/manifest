module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['packages/**/{src,tests}/**/*.{js,jsx,ts,tsx}'],
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
  setupFilesAfterEnv: ['./tests/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
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
