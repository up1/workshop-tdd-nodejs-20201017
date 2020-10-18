const demoService = require("../src/demo_service");

test("should get number 5 from demo service", () => {
  const result = demoService.getNumber(null);
  expect(result).toBe(5);
});
