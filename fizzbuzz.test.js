const fizzbuzz = require("./fizzbuzz");
test("fizzbuzz(1) returns 1", () => {
  expect(fizzbuzz(1)).toBe(1);
}),
  test('fizzbuzz(3) returns "fizz"', () => {
    expect(fizzbuzz(3)).toBe("fizz");
  }),
  test('fizzbuzz(5) returns "buzz"', () => {
    expect(fizzbuzz(5)).toBe("buzz");
  }),
  test('fizzbuzz(15) returns "fizzbuzz"', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  }),
  test("fizzbuzz(4) returns 4", () => {
    expect(fizzbuzz(4)).toBe(4);
  });
