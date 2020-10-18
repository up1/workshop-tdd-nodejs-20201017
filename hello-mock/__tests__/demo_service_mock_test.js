const demoService = require("../src/demo_service");

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.5);
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("should get number 5 from demo service", () => {
  const result = demoService.getNumber(null);
  expect(result).toBe(5);
});
