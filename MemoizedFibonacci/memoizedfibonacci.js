var fibonacci = function (n, cache = {}) {
  if (n == 0 || n == 1) return n

  if (cache[n]) return cache[n]

  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
  return cache[n]
}
