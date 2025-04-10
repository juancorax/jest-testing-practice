import caesarCipher from "../functions/caesarCipher.js";

test("takes a string and a shift factor and returns it with each character shifted", () => {
  expect(caesarCipher("elephant", 5)).toBe("jqjumfsy");
});

test("wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("non-alphabetical characters should remain unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
