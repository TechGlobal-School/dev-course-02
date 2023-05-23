const { getSum, getUsers } = require("../index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(getSum(1, 2)).toBe(3);
});
