module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/order-in-components": "error",
    "vue/no-unused-components": "warn",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-plusplus": "off",
    "max-len": "off",
    "no-restricted-properties": "off",
    "vue/valid-v-slot": "off",
    camelcase: "off",
    "no-param-reassign": "off",
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double"],
  },
};
