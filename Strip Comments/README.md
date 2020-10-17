## Strip Comments

Solution for codewars ploblem [Strip Comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)

```javascript
function solution(input, markers) {
  return input
    .split('\n')
    .map((w) => {
      let m = w.match(`[${markers.join('|')}]+`)
      return m ? w.slice(0, m.index).trim() : w
    })
    .join('\n')
}
```
