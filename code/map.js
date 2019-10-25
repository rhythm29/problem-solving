const mapFunction = (arr, fun) => {
  const b = []
  for (let i = 0; i < arr.length; i++) {
    b.push(fun(arr[i]));
  }
  return b;
}

mapFunction([1,2,3,4], function double(value) {
  return value*2;
});

module.exports = mapFunction;
