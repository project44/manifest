module.exports = {
  rules: {
    // Prefer compact syntax when applicable.
    'logical-assignment-operators': 'error',
    // Disallow expressions where the operation doesn't affect the value.
    'no-constant-binary-expression': 'error',
    // Disallow returning value from constructor.
    'no-constructor-return': 'error',
    // Disallow division operators explicitly at the beginning of regular expressions.
    'no-div-regex': 'error',
    // Disallow shorthand type conversions.
    'no-implicit-coercion': 'error',
    // Disallow empty static blocks.
    'no-empty-static-block': 'error',
    // Disallow new operators with global non-constructor functions.
    'no-new-native-nonconstructor': 'error',
    // Disallow returning values from Promise executor functions.
    'no-promise-executor-return': 'error',
    // Disallow loops with a body that allows only one iteration.
    'no-unreachable-loop': 'error',
    // Disallow unused private class members.
    'no-unused-private-class-members': 'error',
    // Disallow unnecessary calls to .call() and .apply().
    'no-useless-call': 'error',
    // Prefer object destructuring, arrays are optional.
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    // Prefer compact syntax when applicable.
    'prefer-exponentiation-operator': 'error',
    // Prefer use of Object.hasOwn() over Object.prototype.hasOwnProperty.call().
    'prefer-object-has-own': 'error',
    // Prefer compact syntax when applicable
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    // Disallow assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': 'error',
  },
};
