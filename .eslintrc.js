/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['manifest', 'manifest/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
