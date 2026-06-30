import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-filename-extension.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-filename-extension", rule, {
  valid: [
    {
      code: `const el = <div />;`,
      filename: "Component.jsx",
    },
    {
      code: `const el = <div />;`,
      filename: "Component.tsx",
    },
    {
      code: `const x = 1;`,
      filename: "util.js",
    },
    {
      code: `const el = <div />;`,
      filename: "Component.js",
      options: [{ extensions: [".js", ".jsx"] }],
    },
  ],
  invalid: [
    {
      code: `const el = <div />;`,
      filename: "Component.js",
      errors: [{ messageId: "noJSXWithExtension" }],
    },
    {
      code: `const el = <div />;`,
      filename: "Component.ts",
      errors: [{ messageId: "noJSXWithExtension" }],
    },
  ],
});
