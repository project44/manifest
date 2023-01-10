const config = {
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
  testEnvironment: 'node',
  testMatch: ['**/{src,tests}/**/*.test.{js,jsx,ts,tsx}'],
  testRunner: 'jest-circus/runner',
  transform: {
    '\\.(js|ts|jsx|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
};

export default config;
