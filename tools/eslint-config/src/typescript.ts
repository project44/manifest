import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['@typescript-eslint'],
  rules: {
    // Prefer TypeScript annotations
    'default-param-last': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-undef': 'off', // Doesnt find namespaces
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    quotes: 'off',
    'require-await': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/lines-between-class-members': ['error', { exceptAfterOverload: true }],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-shadow': [
      'error',
      { ignoreOnInitialization: true, ignoreTypeValueShadow: true },
    ],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', caughtErrors: 'all', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: true, enums: true, functions: true, typedefs: true, variables: true },
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    // Improve readability
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',

    // Disallow `any` types
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',

    // Classes
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/parameter-properties': 'error',

    // Builtins
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Promises
    'no-void': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreVoidOperator: true }],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true }],
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Awaitable', 'PromiseLike', 'Thenable'],
        allowAny: true, // Because of unknown
        checkArrowFunctions: false,
      },
    ],

    // Recommended
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true, ignoreProperties: true },
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' },
    ],

    // Strict
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],
  },
};

export default config;
