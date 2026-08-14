import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off" // React is imported via Vite/JSX transform, so global vars might be used or handled by the transform.
    },
  },
];
