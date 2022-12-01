module.exports = {
  overrides: [
    {
      files: ['*.{test, spec}.{ts,tsx,js,jsx}'],
      extends: ['plugin:jest/recommended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        // Allow imports of dev dependencies.
        'import/no-extraneous-dependencies': 'off',
        // Enforce test and it usage conventions.
        'jest/consistent-test-it': 'error',
        // Enforce assertion to be made in a test body.
        'jest/expect-expect': 'error',
        // Disallow disabled tests.
        'jest/no-disabled-tests': 'error',
        // Disallow duplicate setup and teardown hooks.
        'jest/no-duplicate-hooks': 'error',
        // Disallow explicitly returning from tests.
        'jest/no-test-return-statement': 'error',
        // Prefer await expect(...).resolves over expect(await ...) syntax.
        'jest/prefer-expect-resolves': 'error',
        // Prefer having hooks before any test cases.
        'jest/prefer-hooks-on-top': 'error',
        // Prefer using jest.spyOn().
        'jest/prefer-spy-on': 'error',
        // Prefer using toBe() for primitive literals.
        'jest/prefer-to-be': 'error',
        // Prefer using toContain().
        'jest/prefer-to-contain': 'error',
        // Prefer using toHaveLength()
        'jest/prefer-to-have-length': 'error',
        // Prefer using test.todo.
        'jest/prefer-todo': 'error',

        // Allow `any` in tests for convenience.
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
