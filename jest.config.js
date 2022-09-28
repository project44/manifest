module.exports = {
	preset: 'jest-preset-moon',
	collectCoverageFrom: [
		'**/{src,__tests__}/**/*.{js,jsx,ts,tsx}',
		'!**/src/**/*.{spec,stories,styles}.{ts,tsx}',
	],
	coveragePathIgnorePatterns: ['<rootDir>/apps', '<rootDir>/examples'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/apps', '<rootDir>/examples'],
	testMatch: ['**/src/**/*.spec.{ts,tsx}'],
};
