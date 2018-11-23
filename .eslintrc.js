module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    // for vue proj
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "no-const-assign": ["error"],
    "no-mixed-spaces-and-tabs": ["error"],
    "constructor-super": ["error"],
    "no-this-before-super": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "block-spacing": ["error", "always"],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "space-infix-ops": ["error"],
    "key-spacing": ["error"],
    "constructor-super": ["error"],
    "no-duplicate-case": ["error"],
    "no-duplicate-imports": ["error"],
    "no-fallthrough": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unsafe-negation": ["error"],
    "space-before-blocks": ["error"],
    "valid-typeof": ["error"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn"],
    // for vue proj
    "vue/max-attributes-per-line": ["off"],
    "vue/comment-directive": ["off"],
    "vue/require-prop-types": ["off"],
    "vue/html-quotes": ["off"]
  },
  // for vue proj
  "plugins": [
    "vue"
  ]
}