const config = {
	collectCoverageFrom: ['**/{src,tests}/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: ['coverage/', 'dist/', 'node_modules/', 'public/', '*.d.ts'].map(
		(str) => str.replace(/\*+/g, '.*'),
	),
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
	modulePathIgnorePatterns: ['node_modules/', 'coverage/', 'dist/'],
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ['**/{src,tests}/**/*.test.{js,jsx,ts,tsx}'],
	testPathIgnorePatterns: ['dist/', 'node_modules/'],
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
