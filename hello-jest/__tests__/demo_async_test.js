const cal = require("../src/demo_async");

test("add numbers async", (done) => {
  cal.addAsyncCallback(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
});

test("should resolve to some value", () => {
  const p = cal.addAsyncPromise(10, 5);
  return expect(p).resolves.toBe(15);
});

test("shows how async / await works", async () => {
  const value = await cal.addAsyncPromise(10, 5);
  expect(value).toBe(15);
});

test("shows how async / await works with reject", async () => {
  await cal.addAsyncPromise(5, 10).catch((value) => expect(value).toBe(15));
});
