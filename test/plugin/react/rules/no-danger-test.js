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
