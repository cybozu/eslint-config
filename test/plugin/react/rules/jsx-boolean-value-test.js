import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/jsx-boolean-value.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-boolean-value", rule, {
  valid: [
    { code: `<input disabled />;` },
    { code: `<input disabled={false} />;` },
    { code: `<input disabled={expr} />;` },
    {
      code: `<input disabled={true} />;`,
      options: ["always"],
    },
    {
      code: `<input />;`,
      options: ["always"],
    },
  ],
  invalid: [
    {
      code: `<input disabled={true} />;`,
      errors: [{ messageId: "omitBoolean" }],
      output: `<input disabled />;`,
    },
    {
      code: `<MyComp active={true} />;`,
      errors: [{ messageId: "omitBoolean" }],
      output: `<MyComp active />;`,
    },
    {
      code: `<input disabled />;`,
      options: ["always"],
      errors: [{ messageId: "setBoolean" }],
      output: `<input disabled={true} />;`,
    },
  ],
});
