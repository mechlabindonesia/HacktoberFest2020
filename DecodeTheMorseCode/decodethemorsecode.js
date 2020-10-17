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
