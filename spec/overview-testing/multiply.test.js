const multiply = require('./multiply.js');

test('multiply 2 from 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});