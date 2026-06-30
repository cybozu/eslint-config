import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-key.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-key", rule, {
  valid: [
    { code: `const a = [<div key="1" />, <div key="2" />];` },
    { code: `items.map(x => <div key={x.id}>{x.name}</div>);` },
    { code: `items.map(x => { return <div key={x} />; });` },
    { code: `items.filter(x => <div key={x} />);` },
    { code: `items.flatMap(x => <div key={x} />);` },
    { code: `const el = <div />;` },
    { code: `const el = <><span /><span /></>;` },
  ],
  invalid: [
    {
      code: `const a = [<div />];`,
      errors: [{ messageId: "missingKey" }],
    },
    {
      code: `const a = [<div />, <span />];`,
      errors: [{ messageId: "missingKey" }, { messageId: "missingKey" }],
    },
    {
      code: `items.map(x => <div>{x}</div>);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.map(x => { return <div />; });`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.flatMap(x => <div>{x}</div>);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `const a = [<>text</>];`,
      errors: [{ messageId: "missingKey" }],
    },
  ],
});
