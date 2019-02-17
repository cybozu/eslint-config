/* eslint-env jquery */

const foos = [''];
foos.map((foo) => foo + foo);

// test whether ESLint can parse this syntax
async function hoge() {
  const result = await new Promise((resolve) => resolve());
  return result;
}
hoge();

$.Deferred();
jQuery.Deferred();
