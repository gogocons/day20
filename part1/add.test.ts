import add from "./add";

it('it can add two numbers together, and returns the sum', function() {
  const x:number = 1;
  const y:number = 2;
  expect(add(x, y)).toBe(3);
});
