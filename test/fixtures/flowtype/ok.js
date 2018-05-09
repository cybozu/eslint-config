// @flow

import ok from './ok';
import type Bar from './ok';

const ok2: Bar = ok;
alert(ok2);

opaque type N: number = number;

type Foo = {
  foo: string,
};

function sum(a: number, b: number): N {
  return a + b;
}

const v: Foo = {
  foo: ''
};
alert(v);

sum(10, 20);