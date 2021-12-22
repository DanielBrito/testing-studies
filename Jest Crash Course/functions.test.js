const functions = require("./functions");

// ToBe
test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not
test("Adds 2+2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// Falsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy(); // Falsy: null, 0, undefined
});

// Objects
test("User should be Daniel Brito object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Daniel",
    lastName: "Brito",
  });
});

// Order of magnitude
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in username", () => {
  usernames = ["daniel", "carla", "admin"];
  expect(usernames).toContain("admin");
});

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions
//     .fetchUser()
//     .then((data) => expect(data.name).toEqual("Leanne Graham"));
// });

// Async
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
