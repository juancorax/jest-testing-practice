import capitalize from "../functions/capitalize.js";

test("takes a string and returns it with the first character capitalized", () => {
  expect(capitalize("elephant")).toBe("Elephant");
});
