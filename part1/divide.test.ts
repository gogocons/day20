import divide from "./divide";

it("divide two numbers, return the value", function () {
  const x: number = 32;
  const y: number = 8;
  expect(divide(x, y)).toBe(4);
});
