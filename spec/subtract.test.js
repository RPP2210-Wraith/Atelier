const minus = require('./minus');

test('subtracts 1 from 3 to equal 2', () => {
  expect(minus(1, 3)).toBe(2);
});