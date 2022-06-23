export default {
  collectCoverageFrom: [
    'packages/**/src/**/*.{ts,tsx}',
    '!packages/**/src/**/*spec.{ts,tsx}',
    '!packages/**/src/**/*stories.{ts,tsx}',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
};
