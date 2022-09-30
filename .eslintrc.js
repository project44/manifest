module.exports = {
	root: true,
	extends: ['moon', 'moon/react'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: 'tsconfig.eslint.json',
	},
	rules: {
		// In very rare cases we allow anys, especially when interfacing with third-party libraries. May remove this in the future.
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',

		// TODO: remove once we bake in internationalization
		'react/jsx-no-literals': 'off',

		complexity: ['error', 20],

		// The following do not play well with css-in-hs
		'no-magic-numbers': 'off',
		'react-perf/jsx-no-new-object-as-prop': 'off',
		'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

		// We often name context types the same as the context declaration for simplicity.
		'@typescript-eslint/no-redeclare': 'off',

		// We create many utils that produce jsx, turning off to improve readability.
		'react/jsx-filename-extension': 'off',

		// This is assigned via our hooks.
		'react/button-has-type': 'off',
	},
	overrides: [
		{
			files: ['*.stories.tsx'],
			rules: {
				// These don't play well with storybook.
				'@typescript-eslint/consistent-type-assertions': 'off',
				'import/no-default-export': 'off',
				'react/function-component-definition': 'off',
				'react/jsx-no-bind': 'off',
				'react-perf/jsx-no-new-function-as-prop': 'off',
				'react-perf/jsx-no-new-array-as-prop': 'off',
			},
		},
		{
			files: ['*.test.tsx'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
				'jest/no-conditional-in-test': 'off',
				'jest/require-to-throw-message': 'off',
			},
		},
	],
};
