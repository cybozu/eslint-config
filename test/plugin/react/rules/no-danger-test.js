import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-danger.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-danger", rule, {
  valid: [
    { code: `<div className="x" />;` },
    { code: `<div id="safe" />;` },
    // On custom components the prop is just an ordinary prop name
    { code: `<MyComp dangerouslySetInnerHTML={{ __html: "x" }} />;` },
    // Member expressions are components even when lowercase
    { code: `<foo.bar dangerouslySetInnerHTML={{ __html: "x" }} />;` },
  ],
  invalid: [
    {
      code: `<div dangerouslySetInnerHTML={{ __html: "<p>unsafe</p>" }} />;`,
      errors: [{ messageId: "noHtmlProp" }],
    },
    {
      code: `<span dangerouslySetInnerHTML={{ __html: content }} />;`,
      errors: [{ messageId: "noHtmlProp" }],
    },
  ],
});
