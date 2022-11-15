module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		require.resolve('./rules/base.js'),
		require.resolve('./rules/typescript.js'),
		require.resolve('./rules/import.js'),
		require.resolve('./rules/jest.js'),
		'prettier',
	],
	plugins: ['import', 'simple-import-sort'],
	env: {
		es2022: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
	},
	settings: {
		'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
		'import/ignore': [
			'node_modules/',
			'build/',
			'coverage/',
			'dist/',
			'\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|yml|yaml)$',
		],
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
		},
	},
	rules: {},
};
