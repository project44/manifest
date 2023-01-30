module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/ignore': [
      'node_modules/',
      'build/',
      'coverage/',
      'dist/',
      'dts/',
      'esm/',
      'lib/',
      '\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|gql|graphql|yml|yaml)$',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    // Extend airbnb's base config
    'logical-assignment-operators': 'error',
    'no-div-regex': 'error',
    'no-constant-condition': 'error',
    'no-constant-binary-expression': 'error',
    'no-empty-static-block': 'error',
    'no-implicit-coercion': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-restricted-syntax': 'off',
    'no-unused-private-class-members': 'error',
    'no-useless-call': 'error',
    'require-atomic-updates': 'error',

    // Does not play well with CSS-in-JS
    'no-magic-numbers': 'off',
    'sort-keys': 'off',

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
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        enums: true,
        functions: true,
        typedefs: true,
        variables: true,
      },
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
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],

    // Doesn't play nicely with typescript.
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    // Prefer modern ESM and MJS code.
    'import/no-commonjs': [
      'error',
      {
        allowConditionalRequire: true,
        allowRequire: true,
      },
    ],

    // Prefer named exports
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        cjs: 'always',
        cts: 'always',
        js: 'never',
        jsx: 'never',
        json: 'always',
        mjs: 'always',
        mts: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Perfer simple import sort
    'sort-imports': 'off',
    'import/order': 'off',
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
    {
      files: ['*.tsx'],
      plugins: ['jsx-a11y', 'react'],
      extends: ['plugin:jsx-a11y/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // Prefer new jsx runtime
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',

        // Accessibility
        'react/no-invalid-html-attribute': 'error',

        // Improve readability
        'react/destructuring-assignment': 'error',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/prefer-stateless-function': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
          },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
          },
        ],
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],

        // No deprecated API's
        'react/no-deprecated': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-unsafe': ['error', { checkAliases: true }],

        // Problematic
        'react/jsx-key': [
          'error',
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
          },
        ],
        'react/jsx-no-bind': [
          'error',
          {
            ignoreDOMComponents: true,
            ignoreRefs: true,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false,
          },
        ],
        'react/jsx-uses-vars': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        // Security
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',

        // Perfer react to TypeScript
        '@typescript-eslint/member-ordering': 'off',
        'react/static-property-placement': 'error',
        'react/sort-comp': [
          'error',
          {
            order: [
              'statics',
              'properties',
              'lifecycle',
              'everything-else',
              'handlers',
              'renderers',
            ],
            groups: {
              statics: ['propTypes', 'defaultProps'],
              properties: [
                '/^(?!on).+$/',
                '/^(?!handle).+$/',
                '/^(?!render).+$/',
                '/^.+Ref$/',
                'state',
              ],
              lifecycle: [
                'constructor',
                'getDerivedStateFromProps',
                'componentDidMount',
                'shouldComponentUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatch',
                'componentWillUnmount',
              ],
              handlers: ['/^on.+$/', '/^handle.+$/'],
              renderers: ['/^render.+$/', 'render'],
            },
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
    {
      files: ['*.test.tsx'],
      rules: {
        'react/jsx-no-bind': 'off',
      },
    },
    {
      files: [
        '**/tests/**/*.test.{ts,tsx,js,jsx}',
        '**/tests/**/*.{ts,tsx,js,jsx}',
        '**/test.{ts,tsx,js,jsx}',
      ],
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
    // Config files tend to use common js syntax.
    {
      files: ['**/.*.{js,ts}', '**/*.config.{js,ts}'],
      rules: {
        'import/no-commonjs': 'off',
        'import/no-default-export': 'off',
      },
    },
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
