const Calculator = function () {
  this.bieval = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
    }
  }

  this.isOperator = (token) => ['+', '-', '*', '/'].includes(token)

  this.isSameOrGreater = (op1, op2) => {
    const levels = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    }

    return levels[op1] >= levels[op2]
  }

  this.evaluate = (string) => {
    let tokens = string.split(' ')
    let values = []
    let operators = []
    for (let token of tokens) {
      if (!isNaN(Number(token))) {
        // is number
        values.push(Number(token))
      }
      if (token === '(') {
        operators.push(token)
      }
      if (token === ')') {
        while (true) {
          let op = operators.pop()
          if (op !== '(') {
            let b = values.pop()
            let a = values.pop()
            values.push(this.bieval(a, b, op))
          } else {
            break
          }
        }
      }
      if (this.isOperator(token)) {
        while (operators.length > 0) {
          if (this.isSameOrGreater(operators[operators.length - 1], token)) {
            let op = operators.pop()
            let b = values.pop()
            let a = values.pop()
            values.push(this.bieval(a, b, op))
          } else {
            break
          }
        }
        operators.push(token)
      }
    }
    while (operators.length > 0) {
      let op = operators.pop()
      let b = values.pop()
      let a = values.pop()
      values.push(this.bieval(a, b, op))
    }
    return values
  }
}
