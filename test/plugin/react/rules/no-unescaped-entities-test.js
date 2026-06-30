import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-unescaped-entities.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-unescaped-entities", rule, {
  valid: [
    { code: `<div>Hello world</div>;` },
    { code: `<div className="x" />;` },
    { code: `<div>{'>'}</div>;` },
    { code: `<p>foo &amp; bar</p>;` },
  ],
  invalid: [
    // Note: `>` and `}` are JSX parse errors so they cannot appear as raw JSX text.
    // Only `"` and `'` can appear as unescaped entities in JSX text.
    {
      code: `<div>say "hello"</div>;`,
      errors: [{ messageId: "unescapedEntity" }],
    },
    {
      code: `<div>it's a test</div>;`,
      errors: [{ messageId: "unescapedEntity" }],
    },
    {
      code: `<div>both "quotes" and apostrophe's</div>;`,
      errors: [
        { messageId: "unescapedEntity" },
        { messageId: "unescapedEntity" },
      ],
    },
  ],
});
