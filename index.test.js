test("foo", () => {
  Promise.reject(new Error());
  expect(1).toBe(1);
});
