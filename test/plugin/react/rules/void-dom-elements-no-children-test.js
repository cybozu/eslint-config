import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/void-dom-elements-no-children.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("void-dom-elements-no-children", rule, {
  valid: [
    { code: `<br />;` },
    { code: `<img src="x.png" />;` },
    { code: `<input type="text" />;` },
    { code: `<div>child</div>;` },
    { code: `<p>text</p>;` },
  ],
  invalid: [
    {
      code: `<br>text</br>;`,
      errors: [{ messageId: "noChildren" }],
    },
    {
      code: `<img>child</img>;`,
      errors: [{ messageId: "noChildren" }],
    },
    {
      code: `<br children="text" />;`,
      errors: [{ messageId: "noChildrenProp" }],
    },
    {
      code: `<input children={<span />} />;`,
      errors: [{ messageId: "noChildrenProp" }],
    },
  ],
});
