const reverseString = require("./reversestring");

test("reverse string function exist", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toBe("olleh");
});
