module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
