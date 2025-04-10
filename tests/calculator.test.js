import calculator from "../functions/calculator.js";

test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts the second number from the first", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divides the first number by the second", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
