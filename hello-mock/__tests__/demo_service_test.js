const demoService = require("../src/demo_service");

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("should get number 5 from demo service", () => {
  const result = demoService.getNumber(null);
  expect(result).toBe(5);
});

test("should be called Math.random", () => {
  const spy = jest.spyOn(global.Math, "random");
  demoService.getNumber(null);
  expect(spy).toBeCalled();
  expect(spy).toBeCalledTimes(1);
});

afterAll(() => {
  jest.clearAllMocks();
});
