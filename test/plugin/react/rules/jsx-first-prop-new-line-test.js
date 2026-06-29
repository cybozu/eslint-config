import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/jsx-first-prop-new-line.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-first-prop-new-line", rule, {
  valid: [
    // Default (multiline-multiprop): single-line with multiple props is OK
    { code: `<div id="x" className="y" />;` },
    // First prop on new line when multiline with multiple props
    { code: `<div\n  id="x"\n  className="y"\n/>;` },
    // "always": first prop on new line
    {
      code: `<div\n  id="x" />;`,
      options: ["always"],
    },
    // "never": first prop on same line
    {
      code: `<div id="x" className="y" />;`,
      options: ["never"],
    },
    // "multiline": first prop on same line when element fits one line
    {
      code: `<div id="x" />;`,
      options: ["multiline"],
    },
  ],
  invalid: [
    // Default (multiline-multiprop): first prop on same line when last prop is on different line
    {
      code: `<div id="x"\n  className="y" />;`,
      errors: [{ messageId: "propOnNewLine" }],
    },
    // "always": first prop must be on new line
    {
      code: `<div id="x" />;`,
      options: ["always"],
      errors: [{ messageId: "propOnNewLine" }],
    },
    // "never": first prop must be on same line
    {
      code: `<div\n  id="x" />;`,
      options: ["never"],
      errors: [{ messageId: "propOnSameLine" }],
    },
  ],
});
