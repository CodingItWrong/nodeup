module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
