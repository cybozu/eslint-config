import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-pascal-case.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-pascal-case", rule, {
  valid: [
    { code: `<MyComponent />;` },
    { code: `<MyComponent.Item />;` },
    { code: `<div />;` },
    { code: `<span className="x" />;` },
    {
      code: `<MY_COMP />;`,
      options: [{ allowAllCaps: true }],
    },
    {
      code: `<Foo.Bar />;`,
      options: [{ allowNamespace: true }],
    },
  ],
  invalid: [
    {
      code: `<myComponent />;`,
      errors: [{ messageId: "usePascalCase" }],
    },
    {
      code: `<camelCaseComp />;`,
      errors: [{ messageId: "usePascalCase" }],
    },
    {
      code: `<MY_COMP />;`,
      errors: [{ messageId: "usePascalCase" }],
    },
  ],
});
