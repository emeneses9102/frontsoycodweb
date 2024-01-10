module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};

// /* eslint-disable no-undef */
// module.exports = {
//   'env': {
//     'browser': true,
//     'es2021': true,
//   },
//   'extends': [
//     'eslint:recommended',
//   ],
//   'settings': {
//     'react': {
//       'version': 'detect',
//     },
//   },
//   'parserOptions': {
//     'ecmaFeatures': {
//       'jsx': true,
//     },
//     'ecmaVersion': 12,
//     'sourceType': 'module',
//   },
//   'rules': {
//     'indent': [
//       'error',
//       2,
//       { 'SwitchCase': 1 },
//     ],
//     'linebreak-style': [
//       'error',
//       'unix',
//     ],
//     'quotes': [
//       'error',
//       'single',
//     ],
//     'semi': [
//       'error',
//       'always',
//     ],
//     'comma-dangle': [
//       'error',
//       'only-multiline',
//     ],
//   },
// };
