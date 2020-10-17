function addAsyncCallback(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

function addAsyncPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(a + b);
    }
    reject(a + b);
  });
}

module.exports = { addAsyncCallback, addAsyncPromise };
