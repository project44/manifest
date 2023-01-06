module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/typescript.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/jest.js'),
    'prettier',
  ],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {},
};
