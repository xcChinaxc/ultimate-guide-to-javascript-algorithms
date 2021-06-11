const mergeArrays = require('./index-START');

test('mergeArrays is a function', () => {
  expect(typeof mergeArrays).toEqual('function');
});

test('Combines 5 arrays of numbers without duplicates', () => {
  expect(mergeArrays([1,2],[2,3],[3,4],[4,5])).toEqual([1,2,3,4,5]);
});

test('Combines 3 arrays of strings without duplicates', () => {
  expect(mergeArrays(['a','b','z'],['m','n','a'],['z','y'])).toEqual(['a','b', 'z', 'm', 'n', 'y']);
});


