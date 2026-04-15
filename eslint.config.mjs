import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ignores: [
      ".next/",
      "node_modules/",
      "dist/",
      "public/",
      "build/",
      ".husky/",
      "*/store/index.js",
    ]
  },
  {
    files: ["*.config.js", "*.config.mjs", "next.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
      prettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "React"
            }
        ],
      // React
      "react/react-in-jsx-scope": "off", // Next.js
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "warn",

      // Accessibility
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // Prettier formatting
      "prettier/prettier": [
        "error",
        {
          "printWidth": 120,
          "tabWidth": 4,
          "useTabs": true,
          "semi": false,
          "singleQuote": false,
          "trailingComma": "es5",
          "bracketSpacing": true,
          "jsxBracketSameLine": false,
          "arrowParens": "always",
          "endOfLine": "lf"
        },
      ],
    },
  },
];
