import type eslint from 'eslint';

const config: eslint.Linter.Config = {
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
  },
};

export default config;
