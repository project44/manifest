module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // Too restrictive
    'unicorn/consistent-destructuring': 'off',
    // Too restrictive
    'unicorn/consistent-function-scoping': 'off',
    // Doesn't work with prettier.
    'unicorn/empty-brace-spaces': 'off',
    // We use file casing to signify different types of files. (JSX,js, etc..)
    'unicorn/filename-case': 'off',
    // Too many false positives.
    'unicorn/no-keyword-prefix': 'off',
    // Doesn't work with prettier.
    'unicorn/no-nested-ternary': 'off',
    // Nulls can be useful.
    'unicorn/no-null': 'off',
    // Too many false positives.
    'unicorn/no-unused-properties': 'off',
    // Enforce explicit assignments.
    'unicorn/no-useless-undefined': 'off',
    // Doesn't work with prettier.
    'unicorn/number-literal-case': 'off',
    // Covered by Typescript.
    'unicorn/prefer-json-parse-buffer': 'off',
    // Too restrictive.
    'unicorn/prevent-abbreviations': 'off',
    // Doesn't work well with types.
    'unicorn/prefer-export-from': 'off',
    // Too restrictive.
    'unicorn/prefer-set-has': 'off',
  },
  overrides: [
    // Config files tend to use common js syntax.
    {
      files: ['**/.*.{js,ts}', '**/*.config.{js,ts}'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
