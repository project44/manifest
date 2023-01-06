/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['simple-import-sort', 'react-hooks', '@typescript-eslint/eslint-plugin'],
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
  rules: {
    // Prefer modern APIs
    'no-restricted-syntax': 'off',

    // Prefer named exports over deault
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',

    // Prefer TypeScript syntax in React.
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // Prefer new jsx runtime
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Button type is with default props.
    'react/button-has-type': 'off',

    // Enforce on and handle event naming.
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
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

    // Prefer TypeScript void handling.
    'no-void': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreVoidOperator: true,
      },
    ],

    // We tend to name types similar to declarations.
    // TODO: enable once we are using the internal `createContext` function.
    '@typescript-eslint/no-redeclare': 'off',
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx,js,jsx}'],
      extends: ['plugin:jest/recommended'],
    },
    {
      files: ['apps/**/*'],
      rules: {
        // Nextjs pages require default exports.
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        // Stories require default exports.
        'import/no-default-export': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
