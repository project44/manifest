module.exports = {
  root: true,
  extends: ['manifest'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
