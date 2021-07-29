const functions = require("./functions");
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Adds 2 + 2 to Not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
test("return it is null", () => {
  expect(functions.isNull()).toBeNull();
});
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
// toEqual
test("User should be Brad Pit object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Pit",
  });
});
// Less than and greater than
test("Should be under than 1600 ", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeGreaterThan(160);
});
// Regex
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
// Arrays

test("Admin should be in Usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data

// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// async await

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
