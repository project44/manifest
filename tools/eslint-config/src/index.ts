import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  root: true,
  extends: [
    'airbnb-base',
    require.resolve('./base.js'),
    require.resolve('./typescript.js'),
    require.resolve('./import.js'),
    require.resolve('./jest.js'),
    require.resolve('./react.js'),
    'prettier',
  ],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  globals: {
    __DEV__: 'readonly',
    __PROD__: 'readonly',
    __TEST__: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {},
};

export default config;
