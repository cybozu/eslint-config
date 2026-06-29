import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/jsx-max-props-per-line.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-max-props-per-line", rule, {
  valid: [
    { code: `<div />;` },
    { code: `<div id="x" />;` },
    { code: `<div\n  id="x"\n  className="y"\n/>;` },
    {
      code: `<div id="x" className="y" />;`,
      options: [{ maximum: 2 }],
    },
    // "when: multiline" skips single-line JSX
    {
      code: `<div id="x" className="y" />;`,
      options: [{ when: "multiline" }],
    },
  ],
  invalid: [
    {
      code: `<div id="x" className="y" />;`,
      errors: [{ messageId: "newLine" }],
    },
    {
      code: `<div id="x" className="y" />;`,
      options: [{ maximum: 1 }],
      errors: [{ messageId: "newLine" }],
    },
    {
      code: `<div\n  id="x" className="y"\n/>;`,
      options: [{ when: "multiline" }],
      errors: [{ messageId: "newLine" }],
    },
    {
      code: `<div id="x" className="y" role="button" />;`,
      options: [{ maximum: 2 }],
      errors: [{ messageId: "newLine" }],
    },
  ],
});
