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

// adpated from https://github.com/joh04667/JS-Postfix-Calculator/blob/master/RPNcalc.js
export function evalPostFix(expr) {
  if (expr === "" || typeof(expr) !== "string") {return "Invalid equation"};
  var ar = expr.split( /\s+/ ), st = [], token;
  // eslint-disable-next-line
  while( token = ar.shift() ) { 
    // eslint-disable-next-line
    if ( token == +token ) {
      st.push( token );
    } else {
      var n2 = st.pop(), n1 = st.pop();
      // eslint-disable-next-line
      st.push( eval( n1 + token + ' ' + n2 ) );
    }
  }
  return Number(st.pop());  
}
  
// adapted from https://eddmann.com/posts/implementing-the-shunting-yard-algorithm-in-javascript/
export function toPostFix(infix) {

  try {
    if (infix === "" || typeof(infix) !== "string") {return "Invalid equation"};
    let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
    let peek = (a) => a[a.length - 1];
    let stack = [];

    return infix
    .split(' ')
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
  }
  catch (Exception) {
    console.log(Exception);
  }
}

