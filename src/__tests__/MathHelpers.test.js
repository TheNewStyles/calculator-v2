import { isANumber, evalPostFix, toPostFix } from '../Components/MathHelpers';

it('Inputs a paren should return false', () => {
  expect(isANumber("(")).toBe(false);
});

it('Inputs a number should return true', () => {
  expect(isANumber("0")).toBe(true);
});