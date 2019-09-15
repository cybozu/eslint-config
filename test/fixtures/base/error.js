import mod from './mod';

var foo = {};
var foo = {};
const obj = {
  a: 'a',
  get b() {
    return;
  }
};

obj.a = obj.a;

mod = 'mod';
console.log(mod);

(async () => {
  obj.a += await new Promise(async (r) => r(10));
})();

function fn(a, b = 'b', c) {
  // noop
}
fn();

const regexp = new RegExp('foo|bar');
console.log(regexp);

