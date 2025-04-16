module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // Customize rules as needed
    "react/react-in-jsx-scope": "off", // Gatsby doesn't need React in scope
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
