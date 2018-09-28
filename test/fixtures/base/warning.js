import {a} from './ok';
import {b} from './ok';

alert(a + b);

[].map((v) => {
  alert(v);
});

function foo(c, d, e, f, g, h, i, j) {}

foo(() => {
  foo(() => {
    foo(() => {
      foo(() => {
        foo(() => {
          foo(() => {});
        });
      });
    });
  });
});