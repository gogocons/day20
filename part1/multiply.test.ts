import multiply from "./multiply";

it("it can multiply two numbers, and return the result", function () {
  const x: number = 3;
  const y: number = 7;
  expect(multiply(x, y)).toBe(21);
});
