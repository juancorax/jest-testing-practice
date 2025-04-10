import analyzeArray from "../functions/analyzeArray.js";

test("average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

test("min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

test("max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

test("length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});
