const filter = require('../code/filter');

test('filter even number from array', () => {
  expect(filter([ 1, 2, 3, 4 ], num => num % 2 === 0)).toEqual([2,4]);
});

test('empty array returns empty array', () => {
  expect(filter([], num => num % 2 === 0)).toEqual([])
});

