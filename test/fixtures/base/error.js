var foo = {};
var foo = {};
const obj = {
  a: 'a',
  get b() {
    return;
  }
};

obj.a = obj.a;

(async () => {
  obj.a += await new Promise(async (r) => r(10));
})();