import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-danger-with-children.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-danger-with-children", rule, {
  valid: [
    { code: `<div dangerouslySetInnerHTML={{ __html: x }} />;` },
    { code: `<div>child</div>;` },
    { code: `<div className="x">text</div>;` },
  ],
  invalid: [
    {
      code: `<div dangerouslySetInnerHTML={{ __html: x }}>child</div>;`,
      errors: [{ messageId: "dangerWithChildren" }],
    },
    {
      code: `<div dangerouslySetInnerHTML={{ __html: x }} children="text" />;`,
      errors: [{ messageId: "dangerWithChildren" }],
    },
  ],
});
