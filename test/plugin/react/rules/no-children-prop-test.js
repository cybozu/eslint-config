import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-children-prop.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-children-prop", rule, {
  valid: [
    { code: `<div>content</div>;` },
    { code: `<div className="x" />;` },
    { code: `<MyComp>child</MyComp>;` },
  ],
  invalid: [
    {
      code: `<div children="text" />;`,
      errors: [{ messageId: "childrenProp" }],
    },
    {
      code: `<MyComp children={<span />} />;`,
      errors: [{ messageId: "childrenProp" }],
    },
    {
      code: `<div children={["a", "b"]} />;`,
      errors: [{ messageId: "childrenProp" }],
    },
  ],
});
