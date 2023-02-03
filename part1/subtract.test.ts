import subtract from "./subtract";

it('subtract seconde number from first number, return the result', function () {
  const x:number = 7;
  const y:number = 10;
  expect(subtract(x, y)).toBe(-3);
})