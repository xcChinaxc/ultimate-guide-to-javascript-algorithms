const rangeSum = require('./index-START')

test('rangeSum is a function', () => {
  expect(typeof rangeSum).toEqual('function');
});

test('return the cummulative sum of the two numbers and all the numbers between them', () => {
  expect(rangeSum([1,9])).toEqual(45);
});