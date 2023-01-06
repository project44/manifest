module.exports = {
  overrides: [
    {
      files: ['*.{tsx,jsx}'],
      extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
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
        // Disallow destructuring assignment of props, state, and context.
        'react/destructuring-assignment': 'error',
        // Display name is inferred from function declarations.
        'react/display-name': 'off',
        // Enforce function declarations for components.
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
        // Enforce boolean attributes notation in JS.
        'react/jsx-boolean-value': ['error', 'never'],
        // Disallow unnecessary JSX expressions.
        'react/jsx-curly-brace-presence': [
          'error',
          {
            children: 'never',
            props: 'never',
          },
        ],
        // Enforce shorthand fragment usage.
        'react/jsx-fragments': ['error', 'syntax'],
        // Enforce on and handle event naming.
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
          },
        ],
        // Disallow inline function calls in JSX.
        'react/jsx-no-bind': [
          'error',
          {
            allowArrowFunctions: false,
            allowBind: false,
            allowFunctions: false,
            ignoreDOMComponents: true,
            ignoreRefs: true,
          },
        ],
        // Disallows JSX context provider values from taking values that will cause needless rerenders.
        'react/jsx-no-constructed-context-values': 'error',
        // Disallow unnecessary fragments.
        'react/jsx-no-useless-fragment': 'error',
        // Enforce PascalCase for user-defined JSX components.
        'react/jsx-pascal-case': [
          'error',
          {
            allowAllCaps: true,
            allowNamespace: true,
          },
        ],
        // Enforces prop sorting for readability.
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: true,
            shorthandLast: false,
          },
        ],
        // Support the new JSX runtime. (>=17).
        'react/jsx-uses-react': 'off',
        // Disallow when this.state is accessed within setState.
        'react/no-access-state-in-setstate': 'error',
        // Disallow usage of Array index in keys
        'react/no-array-index-key': 'error',
        // Lifecycle methods should be methods on the prototype, not class fields.
        'react/no-arrow-function-lifecycle': 'error',
        // Disallow usage of dangerous JSX properties.
        'react/no-danger': 'error',
        // Disallow usage of invalid attributes.
        'react/no-invalid-html-attribute': 'error',
        // Enforce that namespaces are not used in React elements.
        'react/no-namespace': 'error',
        // Disallow this from being used in stateless functional components.
        'react/no-this-in-sfc': 'error',
        // Disallow common typos.
        'react/no-typos': 'error',
        // Disallow usage of unsafe lifecycle methods.
        'react/no-unsafe': [
          'error',
          {
            checkAliases: true,
          },
        ],
        // Disallow creating unstable components inside components.
        'react/no-unstable-nested-components': 'error',
        // Enforce stateless components to be written as a pure function.
        'react/prefer-stateless-function': 'error',
        // Use Typescript types for prop types.
        'react/prop-types': 'off',
        // Support the new JSX runtime. (>=17).
        'react/react-in-jsx-scope': 'off',
        // Disallow extra closing tags for components without children.
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        // Enforce style prop value is an object.
        'react/style-prop-object': 'error',
        // Disallow void DOM elements (e.g. <img />, <br />) from receiving children.
        'react/void-dom-elements-no-children': 'error',
      },
    },
    // Use react member order over typescript.
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/member-ordering': 'off',
      },
    },
    // Make test composition easier.
    {
      files: ['*.{test, spec}.tsx'],
      rules: {
        'react/jsx-no-bind': 'off',
        'react-perf/jsx-no-new-array-as-prop': 'off',
        'react-perf/jsx-no-new-function-as-prop': 'off',
      },
    },
  ],
};
