const mapFunction = require('../code/map');

test('doubles array elements', () => {
  expect(mapFunction([1,2,3,4], num => num * 2)).toEqual([2,4,6,8])
})
