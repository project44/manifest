import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  overrides: [
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
  ],
};

export default config;
