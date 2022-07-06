export default {
  collectCoverageFrom: ['!packages/**/src/**/*.{spec,stories,styles}.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/examples'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/examples'],
};
