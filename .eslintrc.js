module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1
      }
    ],
    'eol-last': 2,
    'no-multiple-empty-lines': 2,
    'vue/valid-v-on': 0
  }
}
