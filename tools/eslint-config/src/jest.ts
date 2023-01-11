import type eslint from 'eslint';

const EXTS = 'ts,tsx,js,jsx';

const config: eslint.Linter.Config = {
  overrides: [
    {
      files: [`**/tests/**/*.test.{${EXTS}}`, `**/tests/**/*.{${EXTS}}`, `**/test.{${EXTS}}`],
      plugins: ['jest'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        // Prefer `it` over `test`
        'jest/consistent-test-it': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',

        'jest/expect-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/prefer-expect-resolves': 'error',

        // Improve readability
        'jest/no-alias-methods': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-restricted-matchers': 'off',
        'jest/no-test-prefixes': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',

        // Prefer promises
        'jest/no-done-callback': 'error',
        'jest/no-test-return-statement': 'error',

        // No skipped tests
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',

        // No exports from tests
        'jest/no-export': 'error',
        'jest/no-mocks-import': 'error',

        // Style
        'jest/no-identical-title': 'error',
        'jest/prefer-lowercase-title': 'error',
        'jest/valid-title': 'error',

        // Make writing tests easier
        'max-classes-per-file': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/promise-function-async': 'off',

        // Allow dev dependencies in tests
        'import/no-extraneous-dependencies': 'off',

        // Allow relative imports
        'import/no-relative-packages': 'off',

        // Allow `any` in tests
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
};

export default config;
