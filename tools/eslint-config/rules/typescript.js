module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  rules: {
    // Enforce consistent object definitions.
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // Enforce consistent usage of type assertions.
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    // Enforce consistent type definition preferring interfaces.
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Enforce default parameters to be the last of parameters.
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    // Enforce dot notation whenever possible.
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    // Enforce explicit accessibility modifiers on class properties and methods.
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    // Enforce lines between class members.
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      {
        exceptAfterOverload: true,
      },
    ],
    // Enforce explicit member ordering.
    '@typescript-eslint/member-ordering': 'error',
    // Enforce consistent method signature syntax.
    '@typescript-eslint/method-signature-style': 'error',
    // Enforce toString() to be called only on supported objects.
    '@typescript-eslint/no-base-to-string': 'error',
    // Disallow confusing non-null assertions.
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // Disallow confusing void expressions.
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreVoidOperator: true,
      },
    ],
    // Disallow duplicate class members.
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // Disallow duplicate enum member values.
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // Allow empty functions, good for abstract classes.
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // Disallow use of the any type.
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    // Allow extra semi-colons, covered by prettier.
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    // Disallow classes used as namespaces.
    '@typescript-eslint/no-extraneous-class': 'error',
    // Disallow this keywords outside of classes or class-like objects..
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    // Disallow function declarations that contain unsafe references inside loop statements.
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    // Disallow non-null assertions in the left operand of a nullish coalescing operator.
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    // Allow non-null assertions using the ! postfix operator.
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Disallow members of unions and intersections that do nothing or override type information.
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // Too restrictive.
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreOnInitialization: true,
        ignoreTypeValueShadow: true,
      },
    ],
    // Disallow throwing literals as exceptions.
    '@typescript-eslint/no-throw-literal': 'error',
    // Disallow unnecessary equality comparisons against boolean literals.
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // Disallow unnecessary namespace qualifiers.
    '@typescript-eslint/no-unused-expressions': 'error',
    // Disallow unused variables. Except for with rest spreading is used.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    // Disallow the use of variables before they are defined.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    // Disallow unnecessary constructors.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // Enforce non-null assertions over explicit type casts.
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    // Prefer the use of for-of loop over the standard for loop where possible.
    '@typescript-eslint/prefer-for-of': 'error',
    // Prefer using function types instead of interfaces with call signatures.
    '@typescript-eslint/prefer-function-type': 'error',
    // Prefer includes method over indexOf method.
    '@typescript-eslint/prefer-includes': 'error',
    // Prefer all enum members to be literal values.
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    // Prefer modern syntax
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    // Prefer using the nullish coalescing operator instead of logical chaining.
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Prefer using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
    '@typescript-eslint/prefer-optional-chain': 'error',
    // Prefer using type parameter when calling Array#reduce instead of casting.
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // Prefer using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // Prefer using @ts-expect-error over @ts-ignore.
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // Prefer any function or method that returns a Promise to be marked async.
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
        allowedPromiseNames: ['Awaitable', 'PromiseLike', 'Thenable'],
        checkArrowFunctions: false,
      },
    ],
    // Enforce the use of single quotes.
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // Enforce consistent returning of awaited values.
    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    // Require switch-case statements to be exhaustive with union type.
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Throws false positives with some hooks.
    '@typescript-eslint/unbound-method': 'off',
    // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
    '@typescript-eslint/unified-signatures': [
      'error',
      {
        ignoreDifferentlyNamedParameters: true,
      },
    ],
  },
};
