const multiply = require('./multiply');

test('multiply 2 from 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});