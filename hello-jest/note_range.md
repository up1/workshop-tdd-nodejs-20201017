## Traditional loop

```
function range(start, end) {
    var result = [];
    for (let i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}
```

## Recursion

```
function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}
```

## Array

```
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (\_, i) => i)
}

or

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i)
```

## Generator

```
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

```

Using

```
[...range(1, 5)]

or

for (i of range(1, 5)) {
    console.log(i);
}
```

## Note

```
var array = [1, 2, 3];
array.join(',');
```
