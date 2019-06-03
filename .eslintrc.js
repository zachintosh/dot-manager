module.exports = {
  plugins: ['babel', 'react-hooks'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],

    //override airbnb overbearing rules
    'arrow-parens': [1, 'as-needed'],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',

    'jest/no-large-snapshots': 'error',

    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/*.stories.js', '**/*.test.js', '**/demo/**']}],
    "jsx-a11y/label-has-for": 0, // this is deprecated in future versions so disable now
    "jsx-a11y/label-has-associated-control": [ 2, {
      "assert": "either", // fs-styles does not support nesting currently
    }],
  },
}