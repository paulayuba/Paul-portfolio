import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility instance to handle 'extends' correctly
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration using flat config format
export default [
  compat.extend("next/core-web-vitals"),
  {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // Add custom rules here if needed
      // For example: "no-console": "warn",
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];
