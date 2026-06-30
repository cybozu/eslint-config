import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-no-target-blank.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-no-target-blank", rule, {
  valid: [
    { code: `<a href="/" target="_blank" rel="noreferrer" />;` },
    { code: `<a href="/" target="_blank" rel="noreferrer noopener" />;` },
    { code: `<a href="/" target="_self" />;` },
    { code: `<a href="/" />;` },
    { code: `<a href="/" target="_blank" rel={dynamicRel} />;` },
  ],
  invalid: [
    {
      code: `<a href="/" target="_blank" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="/" target="_blank" rel="noopener" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="/" target="_blank" rel="" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
  ],
});
