import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/self-closing-comp.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("self-closing-comp", rule, {
  valid: [
    { code: `<div />;` },
    { code: `<div>text</div>;` },
    { code: `<MyComp />;` },
    { code: `<br />;` },
    { code: `<img src="x.png" />;` },
    {
      code: `<div></div>;`,
      options: [{ html: false }],
    },
    {
      code: `<MyComp></MyComp>;`,
      options: [{ component: false }],
    },
  ],
  invalid: [
    {
      code: `<div></div>;`,
      errors: [{ messageId: "notSelfClosing" }],
      output: `<div />;`,
    },
    {
      code: `<MyComp></MyComp>;`,
      errors: [{ messageId: "notSelfClosing" }],
      output: `<MyComp />;`,
    },
    {
      code: `<section></section>;`,
      errors: [{ messageId: "notSelfClosing" }],
      output: `<section />;`,
    },
  ],
});
