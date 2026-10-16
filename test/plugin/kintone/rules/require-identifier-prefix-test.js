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
    // Names shadowing the import do not refer to `createRoot` of `react-dom/client`
    {
      code: `${IMPORT} function run(createRoot) { createRoot(container); }`,
    },
    {
      code: `${IMPORT} function run() { const createRoot = () => {}; createRoot(container); }`,
    },
    {
      code: `import { createRoot as create } from "react-dom/client"; function run(create) { create(container); }`,
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
    // Imports are hoisted, so calls before the import are also reported
    {
      code: `createRoot(container); ${IMPORT}`,
      errors,
    },
    // Calls in a nested scope refer to the import
    {
      code: `${IMPORT} function run() { createRoot(container); }`,
      errors,
    },
  ],
});
