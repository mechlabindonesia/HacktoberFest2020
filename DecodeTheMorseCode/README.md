## Decode the Morse Code

Solution for codewars ploblem [Decode the Morse Code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

```javascript
decodeMorse = function (morseCode) {
  return morseCode
    .split('   ')
    .map((word) => {
      return word
        .split(' ')
        .map((c) => MORSE_CODE[c])
        .join('')
    })
    .join(' ')
    .trim()
}
```
