export function isANumber(lastChar) {
  const operators = ["/","*","+","-"];
  const decimal = ".";
  const leftParen = "(";
  const rightParen = ")";
  const isLastCharAnOperator = operators.indexOf(lastChar) >= 0;
  const isLastCharAdecimal = lastChar === decimal;
  const isLastCharAParen = lastChar === leftParen || lastChar === rightParen;
  const isLastCharEmpty = lastChar === "";

  if (!isLastCharEmpty && !isLastCharAnOperator && !isLastCharAParen && !isLastCharAdecimal) {
    return true;
  }
  return false;
}

  //adapted from https://eddmann.com/posts/small-rpn-implementation-in-javascript/
export function reversePolishNotation(ts, s = []) {
  ts.split(' ').forEach(t =>
    s.push(t === +t ? t : eval(s.splice(-2,1)[0] + t + s.pop())));
  return s[0];
}

//adapted from https://eddmann.com/posts/implementing-the-shunting-yard-algorithm-in-javascript/
export function yard(infix) {
  let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
  let peek = (a) => a[a.length - 1];
  let stack = [];

  return infix
    .split('')
    .reduce((output, token) => {
      if (parseFloat(token)) {
        output.push(token);
      }

      if (token in ops) {
        while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
          output.push(stack.pop());
        stack.push(token);
      }

      if (token === '(') {
        stack.push(token);
      }

      if (token === ')') {
        while (peek(stack) !== '(')
          output.push(stack.pop());
        stack.pop();
      }

      return output;
    }, [])
    .concat(stack.reverse())
    .join(' ');
};