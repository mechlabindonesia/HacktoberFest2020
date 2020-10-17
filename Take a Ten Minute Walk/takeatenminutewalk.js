function isValidWalk(walk) {
  let opposite = {
    n: 's',
    s: 'n',
    w: 'e',
    e: 'w',
  }

  if (walk.length != 10) return false
  let stack = []
  for (let d of walk) {
    let top = stack[stack.length - 1]
    if (top == opposite[d]) stack.pop()
    else stack.push(d)
  }
  return !stack.length
}
