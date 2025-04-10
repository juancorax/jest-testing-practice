import reverseString from "../functions/reverseString.js";

test("takes a string and returns it reversed", () => {
  expect(reverseString("elephant")).toBe("tnahpele");
});
