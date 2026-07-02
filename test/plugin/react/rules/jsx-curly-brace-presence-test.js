import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-curly-brace-presence.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-curly-brace-presence", rule, {
  valid: [
    { code: `<div className="foo" />;` },
    { code: `<div>{someVar}</div>;` },
    { code: `<div className={expr} />;` },
    // Special chars that need escaping are allowed to keep curly braces
    { code: `<div>{"x < y"}</div>;` },
    { code: `<div>{"x > y"}</div>;` },
    {
      code: `<div className={"foo"} />;`,
      options: [{ props: "always" }],
    },
    {
      code: `<div>{"hello"}</div>;`,
      options: [{ children: "always" }],
    },
  ],
  invalid: [
    {
      code: `<div className={"foo"} />;`,
      errors: [{ messageId: "unnecessaryCurly" }],
      output: `<div className="foo" />;`,
    },
    {
      code: `<div>{"hello"}</div>;`,
      errors: [{ messageId: "unnecessaryCurly" }],
      output: `<div>hello</div>;`,
    },
    {
      code: `<div className="foo" />;`,
      options: [{ props: "always" }],
      errors: [{ messageId: "missingCurly" }],
      output: `<div className={"foo"} />;`,
    },
  ],
});
