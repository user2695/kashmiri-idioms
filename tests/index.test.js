const randomIdiom = require("../index");

test("does not return null", () => {
  expect(randomIdiom).not.toBe(null);
});

test("return truthy value", () => {
  expect(randomIdiom).toBeTruthy();
});
