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
    {
      code: `<a href="https://example.com" target="_blank" rel="noreferrer" />;`,
    },
    {
      code: `<a href="https://example.com" target="_blank" rel="noreferrer noopener" />;`,
    },
    { code: `<a href={url} target="_blank" rel="noreferrer" />;` },
    // Internal or relative links cannot control window.opener
    { code: `<a href="/" target="_blank" />;` },
    { code: `<a href="relative/path" target="_blank" />;` },
    // No href at all
    { code: `<a target="_blank" />;` },
    { code: `<a href="https://example.com" target="_self" />;` },
    { code: `<a href="https://example.com" />;` },
  ],
  invalid: [
    {
      code: `<a href="https://example.com" target="_blank" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="//example.com" target="_blank" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    // Dynamic href may be external
    {
      code: `<a href={url} target="_blank" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="https://example.com" target="_blank" rel="noopener" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="https://example.com" target="_blank" rel="" />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    // Bare or dynamic rel is not a guaranteed "noreferrer"
    {
      code: `<a href="https://example.com" target="_blank" rel />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    {
      code: `<a href="https://example.com" target="_blank" rel={dynamicRel} />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
    // Conditionally "_blank" target
    {
      code: `<a href="https://example.com" target={cond ? "_blank" : "_self"} />;`,
      errors: [{ messageId: "noTargetBlank" }],
    },
  ],
});
