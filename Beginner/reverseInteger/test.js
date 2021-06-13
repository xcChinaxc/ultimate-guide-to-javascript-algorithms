const reverseInteger = require('./index-START')

test('reverseInteger is a function', () => {
  expect(typeof reverseInteger).toEqual('function');
});

test('reverses a number', () => {
  expect(reverseInteger(-123)).toEqual(-321);
});