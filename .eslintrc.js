module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  // add your custom rules here
  'rules': {
    'vue/valid-v-if': 'error',
    'vue/no-async-in-computed-properties': 'error'
  }
}
