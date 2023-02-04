import isHorseman from "./isHorseman";

it('checks if the passed in string reads "horseman" or not', function () {
  const horseMan = "horseman";
  expect(isHorseman(horseMan)).toBe(true);
});

it("check if throw error function is working for wrong string", function () {
  const wrong = "whatever";
  expect(() => {
    isHorseman(wrong);
  }).toThrow(new Error("You're NOT the horseman! I am the horse... man!"));
});
