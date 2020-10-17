## Memoized Fibonacci

Solution for codewars ploblem [Memoized Fibonacci](https://www.codewars.com/kata/529adbf7533b761c560004e5)

```javascript
var fibonacci = function (n, cache = {}) {
  if (n == 0 || n == 1) return n

  if (cache[n]) return cache[n]

  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
  return cache[n]
}
```
