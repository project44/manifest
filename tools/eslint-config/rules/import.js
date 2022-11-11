module.exports = {
	plugins: ['import', 'simple-import-sort'],
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
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
	rules: {
		'import/default': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				cjs: 'always',
				cts: 'always',
				js: 'never',
				json: 'always',
				jsx: 'never',
				mjs: 'always',
				mts: 'always',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/max-dependencies': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-commonjs': [
			'error',
			{
				allowConditionalRequire: true,
				allowRequire: true,
			},
		],
		'import/no-cycle': 'off',
		'import/no-default-export': 'error',
		'import/no-deprecated': 'off',
		'import/no-import-module-exports': 'error',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-relative-packages': 'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-unresolved': [
			'error',
			{
				caseSensitiveStrict: true,
				commonjs: true,
				ignore: ['^:[a-z]'],
			},
		],
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: false,
				noUselessIndex: true,
			},
		],
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					[
						'^\\u0000',
						'^node:',
						'^react',
						'^@react',
						'^[a-z]',
						'^@[a-z]',
						'^:[a-z]',
						'^\\.\\./',
						'^\\./',
						'^\\.$',
						'\\*',
					],
				],
			},
		],
		'sort-imports': 'off',
	},
	overrides: [
		{
			files: ['*.test.tsx'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
		{
			files: ['*.stories.tsx'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['**/index.*'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['**/.*.{js,ts}', '**/*.config.{js,ts}'],
			rules: {
				'import/no-commonjs': 'off',
				'import/no-default-export': 'off',
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
};
