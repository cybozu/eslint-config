const nums: Array<number> = [1, 2, 3];

const shadow: number = 1;
const shadowingFunc: () => number = () => {
  const shadow: number = 2;
  return shadow;
};