const subtract = require("./subtract");

test("Properly subtracting two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
