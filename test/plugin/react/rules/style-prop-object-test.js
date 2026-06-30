import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/style-prop-object.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("style-prop-object", rule, {
  valid: [
    { code: `<div style={{ color: "red" }} />;` },
    { code: `<div style={dynamicStyle} />;` },
    { code: `<div />;` },
    // Custom components are not checked
    { code: `<MyComp style="color: red" />;` },
  ],
  invalid: [
    {
      code: `<div style="color: red" />;`,
      errors: [{ messageId: "stylePropNotObject" }],
    },
    {
      code: `<div style={"color: red"} />;`,
      errors: [{ messageId: "stylePropNotObject" }],
    },
    {
      code: `<span style="font-size: 12px" />;`,
      errors: [{ messageId: "stylePropNotObject" }],
    },
  ],
});
