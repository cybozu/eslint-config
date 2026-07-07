import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-no-useless-fragment.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-no-useless-fragment", rule, {
  valid: [
    { code: `<><A /><B /></>;` },
    { code: `<React.Fragment><A /><B /></React.Fragment>;` },
    { code: `<><A /><B /><C /></>;` },
    // Keyed fragments are the only way to key without a DOM wrapper
    { code: `items.map(x => <Fragment key={x.id}>{x.name}</Fragment>);` },
    {
      code: `items.map(x => <React.Fragment key={x.id}>{x.name}</React.Fragment>);`,
    },
  ],
  invalid: [
    {
      code: `<><A /></>;`,
      errors: [{ messageId: "uselessFragment" }],
    },
    {
      code: `<></>;`,
      errors: [{ messageId: "uselessFragment" }],
    },
    {
      code: `<Fragment><A /></Fragment>;`,
      errors: [{ messageId: "uselessFragment" }],
    },
    {
      code: `<React.Fragment><A /></React.Fragment>;`,
      errors: [{ messageId: "uselessFragment" }],
    },
    {
      code: `export default function App() { return <><p>only child</p></>; }`,
      errors: [{ messageId: "uselessFragment" }],
    },
  ],
});
