import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/no-unknown-property.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-unknown-property", rule, {
  valid: [
    { code: `<div className="x" />;` },
    { code: `<div id="x" />;` },
    { code: `<div data-foo="x" />;` },
    { code: `<div aria-label="x" />;` },
    { code: `<div onClick={() => {}} />;` },
    // Custom components are not checked
    { code: `<MyComp unknownProp="x" />;` },
    { code: `<img src="x.png" alt="x" />;` },
  ],
  invalid: [
    {
      code: `<div class="x" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<label for="x" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<div tabindex="0" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<div fooBarBaz="x" />;`,
      errors: [{ messageId: "unknownPropNoSuggestion" }],
    },
  ],
});
