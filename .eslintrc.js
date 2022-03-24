module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    'plugin:nuxt/recommended',
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier/vue",
  ],
  plugins: ['prettier', 'vue'],
  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser"
  }
};