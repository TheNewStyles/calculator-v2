export function isOperator(value) {
  const operators = ["/","*","+","-"];
  return operators.indexOf(value) >= 0 ? true : false;
}

export function isParen(value) {
  const parens = ["(",")"];
  return parens.indexOf(value) >= 0 ? true : false;
}

export function isClear(value) {
  const clear = "AC";
  return clear.indexOf(value) >= 0 ? true : false;
}

export function isNumber(value) {
  const numbers = ["1","2","3","4","5","6","7","8","9","0"];
  return numbers.indexOf(value) >= 0 ? true : false;
}

export function isDecimal(value) {
  const decimal = ".";
  return decimal.indexOf(value) >= 0 ? true : false;
}

export function isCalculate(value) {
  const calculate = ["=","Enter"];
  return calculate.indexOf(value) >= 0 ? true : false;
}
