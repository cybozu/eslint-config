import { RuleTester } from "eslint";
import rule from "../../../../plugins/kintone/rules/require-identifier-prefix.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
});

const IMPORT = `import { createRoot } from "react-dom/client";`;
const errors = [{ messageId: "missing" }];

ruleTester.run("require-identifier-prefix", rule, {
  valid: [
    { code: `${IMPORT} createRoot(container, { identifierPrefix: "app" });` },
    {
      code: `import { createRoot as create } from "react-dom/client"; create(container, { identifierPrefix: "app" });`,
    },
    // Options passed as a variable or a spread cannot be inspected, so they are allowed
    { code: `${IMPORT} createRoot(container, options);` },
    {
      code: `${IMPORT} createRoot(container, { ...options, onRecoverableError });`,
    },
    // `createRoot` not from `react-dom/client` is out of scope
    {
      code: `import { createRoot } from "./createRoot"; createRoot(container);`,
    },
  ],
  invalid: [
    { code: `${IMPORT} createRoot(container);`, errors },
    {
      code: `${IMPORT} createRoot(container, { onRecoverableError });`,
      errors,
    },
    {
      code: `import { createRoot as create } from "react-dom/client"; create(container);`,
      errors,
    },
  ],
});
