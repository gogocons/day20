import greaterThan from "./greaterThan";

it("should return true if number is greater than the other", function () {
  const x: number = 10;
  const y: number = 2;
  expect(greaterThan(x, y)).toBe(true);
});

it("should return false if the number is not greater than the other", function () {
  const x: number = 3;
  const y: number = 7;
  expect(greaterThan(x, y)).toBe(false);
});
