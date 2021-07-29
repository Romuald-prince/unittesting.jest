const isAnagram = require("./anagram");

test("isAnagram function exist", () => {
  expect(isAnagram).toBeDefined;
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
