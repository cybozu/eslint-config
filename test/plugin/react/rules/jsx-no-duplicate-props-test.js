import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/jsx-no-duplicate-props.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-no-duplicate-props", rule, {
  valid: [
    { code: `<div id="a" className="b" />;` },
    { code: `<div id="a" ID="b" />;` },
    {
      code: `<div id="a" ID="b" />;`,
      options: [{ ignoreCase: false }],
    },
  ],
  invalid: [
    {
      code: `<div id="a" id="b" />;`,
      errors: [{ messageId: "duplicate", data: { name: "id" } }],
    },
    {
      code: `<div className="a" className="b" />;`,
      errors: [{ messageId: "duplicate", data: { name: "className" } }],
    },
    {
      code: `<div id="a" ID="b" />;`,
      options: [{ ignoreCase: true }],
      errors: [{ messageId: "duplicate" }],
    },
  ],
});
