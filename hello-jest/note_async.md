# Topics

- Callbacks
- Promises
- Async/Await

## Callback

```
test('add numbers async', done => {
  addAsync(10, 5, result => {
    expect(result).toBe(15);
    done();
  })
})
```

## Promises

```
test('should not pass', () => {
  const p = Promise.resolve(false);

  p.then(value => {
    expect(value).toBe(true);
  })
})

test('properly test a Promise', () => {
  return somePromise.then(value => {
    expect(value).toBeTrue();
  })
})

test('should resolve to some value', () => {
  const p = Promise.resolve('some value');
  return expect(p).resolves.toBe('some value');
});

test('should reject to error', () => {
  const p = Promise.reject('error');
  return expect(p).rejects.toBe('error');
});
```

## Async/Await

```
test('shows how async / await works', async () => {
  const value = await Promise.resolve(true);
  expect(value).toBe(true);
});
```

## Reference websites

https://www.pluralsight.com/guides/test-asynchronous-code-jest
