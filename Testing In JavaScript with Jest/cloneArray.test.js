const cloneArray = require("./cloneArray");

test("Properly clone array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual([1, 2, 3]);
  expect(cloneArray(array)).not.toBe(array);
});
