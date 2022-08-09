const addition = require("./calculator.js");
test("adds 1 + 2 to equal 3", () => {
  expect(addition(1, 2)).toBe(3);
});

const substrac = require("./calculator");
test("substratct 2 - 1 to equal 1", () => {
  expect(addition(2, 1)).toBe(1);
});

const multiply = require("./calculator");
test("multiply 2 * 2 to equal 4", () => {
  expect(addition(2, 2)).toBe(4);
});

const divide = require("./calculator");
test("divide 2 / 2 to equal 1", () => {
  expect(addition(2, 2)).toBe(1);
});
