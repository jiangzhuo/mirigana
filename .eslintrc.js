module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-restricted-syntax': 0,
    'camelcase': 0,
    'no-underscore-dangle': 0,
  },
};
