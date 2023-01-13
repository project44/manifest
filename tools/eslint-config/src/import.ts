import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['import', 'simple-import-sort'],
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/ignore': [
      'node_modules/',
      'build/',
      'coverage/',
      'dist/',
      'dts/',
      'esm/',
      'lib/',
      '\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|gql|graphql|yml|yaml)$',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    // Doesn't play nicely with typescript.
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    // Prefer modern ESM and MJS code.
    'import/no-commonjs': [
      'error',
      {
        allowConditionalRequire: true,
        allowRequire: true,
      },
    ],

    // Prefer named exports
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        cjs: 'always',
        cts: 'always',
        js: 'never',
        jsx: 'never',
        json: 'always',
        mjs: 'always',
        mts: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Perfer simple import sort
    'sort-imports': 'off',
    'import/order': 'off',
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
  },
  overrides: [
    // Allow default exports from package indexes
    {
      files: ['**/index.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    // Config files tend to use common js syntax.
    {
      files: ['**/.*.{js,ts}', '**/*.config.{js,ts}'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
};

export default config;
