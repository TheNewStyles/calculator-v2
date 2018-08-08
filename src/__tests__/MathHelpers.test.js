import { isANumber, evalPostFix, toPostFix } from '../Components/MathHelpers';

it('isANumber | enter paren should return false', () => {
  expect(isANumber("(")).toBe(false);
});

it('isAnumber | enter number should return true', () => {
  expect(isANumber("0")).toBe(true);
});

it('toPostFix | enter equation should return post fix', () => {
  expect(toPostFix("2 + 2")).toBe("2 2 +");
});

it('toPostFix | enter a invalid expression string should return empty string', () => {
  expect(toPostFix("")).toBe("Invalid equation");
});

it('evalPostFix | sum | eval 2 2 + should equal 4', () => {
  expect(evalPostFix("2 2 +")).toBe(4);
});

it('evalPostFix | multiplication | 2 3 * should equal 6', () => {
  expect(evalPostFix("2 3 *")).toBe(6);
});

it('evalPostFix | subtraction | 2 2 - ', () => {
  expect(evalPostFix("2 2 -")).toBe(0);
});

it('evalPostFix | division | 4 2 /', () => {
  expect(evalPostFix("4 2 /")).toBe(2);
});

it('evalPostFix | empty string should return "Invalid equation"', () => {
  expect(evalPostFix("")).toBe("Invalid equation");
});