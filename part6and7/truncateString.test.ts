import truncateString from "./truncateString";

it('takes two inputs, a string, and a number, if string is longer than number, return value up until that point', function () {
  const longString = 'I wish I never heard of cryptocurrency, sick of being rugged';
  const maxLength = 6;
  const expected = 'I wish';
  expect(truncateString(longString, maxLength)).toBe(expected);
})

it ('test if return on shorter than max length setting is working correctly', function () {
  const shortString = 'NGMI, FUCK ME';
  const maxLength = 69;
  const expected = 'NGMI, FUCK ME';
  expect(truncateString(shortString, maxLength)).toBe(expected);
})