const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    // "next",
    // "next/core-web-vitals",
    "prettier",
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  plugins: [
    "perfectionist",
    "prettier",
    "react-hooks",
    "unused-imports",
  ],
  rules: {
    "camelcase": 0,
    "default-param-last": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "naming-convention": 0,
    "no-alert": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-promise-executor-return": 0,
    "no-restricted-exports": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "react/forbid-prop-types": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/no-children-prop": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
  }
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       project,
  //     },
  //   },
  // },
}
