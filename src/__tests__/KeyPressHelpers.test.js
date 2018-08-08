import { isType } from '../Components/KeyPressHelpers.js';

it('isOperator | enter number array and number should return true', () => {
  expect(isType(["1","2","3","4","5","6","7","8","9","0"], "1")).toBe(true);
});

