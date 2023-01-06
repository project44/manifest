module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['simple-import-sort'],
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
    // Doesn't play nicely with typescript.
    'import/default': 'off',
    // Doesn't play nicely with typescript.
    'import/named': 'off',
    // Doesn't play nicely with typescript.
    'import/namespace': 'off',
    // Prefer modern ESM and MJS code.
    'import/no-amd': 'error',
    // Prefer modern ESM and MJS code.
    'import/no-commonjs': [
      'error',
      {
        allowConditionalRequire: true,
        allowRequire: true,
      },
    ],
    // Doesn't play nicely with typescript.
    'import/no-cycle': 'off',
    // Disallow default exports.
    'import/no-default-export': 'error',
    // Disallow the import of external modules that are not declared
    'import/no-extraneous-dependencies': 'error',
    // Prefer modern ESM and MJS code.
    'import/no-import-module-exports': 'error',
    // Doesn't play nicely with typescript.
    'import/no-named-as-default': 'off',
    // Doesn't play nicely with typescript.
    'import/no-named-as-default-member': 'off',
    // Doesn't play nicely with typescript.
    'import/no-namespace': 'off',
    // Disallow usage of relative imports.
    'import/no-relative-packages': 'error',
    // Sort imports and exports.
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
