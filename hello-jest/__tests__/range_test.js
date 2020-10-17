const range = require("../src/range");

test("should start with include [1,5]", () => {
  const input = "[1,5]";
  const result = range.isStartWithInclude(input);
  expect(result).toBeTruthy();
});

test("should start with exclude (1,5]", () => {
  const input = "(1,5]";
  const result = range.isStartWithInclude(input);
  expect(result).toBeFalsy();
});

test("should return start number 1 with include [1,5]", () => {
  const input = "[1,5]";
  const result = range.getStart(input);
  expect(result).toBe(1);
});

test("should return start number 2 with exclude (1,5]", () => {
  const input = "(1,5]";
  const result = range.getStart(input);
  expect(result).toBe(2);
});

test("case [1,5] should return 1,2,3,4,5", () => {
  const input = "[1,5]";
  const result = range.format(input);
  expect(result).toBe("1,2,3,4,5");
});

test("Invalid input ...", () => {
  const invalidInput = "|1,5]";
  expect(() => range.validate(invalidInput)).toThrowError("Invalid input");
});
