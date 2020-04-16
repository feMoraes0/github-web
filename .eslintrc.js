module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { 
        "extensions": [".js", ".jsx"]
      }
    ], // react using jsx.
    "quotes": ["error", "single"], // define single quotes as default to js files.
    "jsx-quotes": ["error", "prefer-single"], // define single quotes as default to jsx.
    "class-methods-use-this": "off", // remove necessity to use this in class.
    "no-param-reassign": "off", // turn off the lock to modify parameters.
  },
};
