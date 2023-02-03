import lessThan from "./lessThan";

it("should return true if number is less than the other", function () {
  const x: number = 3;
  const y: number = 7;
  expect(lessThan(x, y)).toBe(true);
});

it("should return false if the number is not less than the other", function () {
  const x: number = 10;
  const y: number = 1;
  expect(lessThan(x, y)).toBe(false);
});
