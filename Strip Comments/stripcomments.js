function solution(input, markers) {
  return input
    .split('\n')
    .map((w) => {
      let m = w.match(`[${markers.join('|')}]+`)
      return m ? w.slice(0, m.index).trim() : w
    })
    .join('\n')
}
