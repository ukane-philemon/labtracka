const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  plugins: [
    "react-hooks"
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
}
