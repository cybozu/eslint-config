type Foo = {
  bar: string;
};

const sum = (a: number, b: number): number => a + b;
console.log(sum(10, 20));

interface BarInterface {
  name: string;
}

class Bar {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const bar: BarInterface = new Bar("bar");
console.log(bar);
