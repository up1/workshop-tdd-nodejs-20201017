const isStartWithInclude = (input) => {
  //   return input[0] === "[";
  return input.startsWith("[");
};

const getStart = (input) => {
  //   return Number(input[1]);
  if (isStartWithInclude(input)) {
    return Number(input[1]);
  }
  return Number(input[1]) + 1;
  //   return isStartWithInclude(input) ? Number(input[1]) : Number(input[1]) + 1;
};

const format = (input) => {
  const start = getStart(input);
  const end = 5;
  //   let result = [];
  //   for (const number of xx(start, end)) {
  //     result.push(number);
  //   }
  const result = [...xx(start, end)];
  return result.join(",");
};

function* xx(start, end) {
  for (let index = start; index < end + 1; index++) {
    yield index;
  }
}

module.exports = {
  isStartWithInclude,
  getStart,
  format,
};
