// arr all ele func, acc, cur val,, return acc, with reduced value


const reduce = (arr, acc, fun) => {
  for (let i = 0; i < arr.length; i++) {
    acc = fun(arr[i], acc)
  }
  return acc;
}

const sum = (num, acc) => num - acc;

console.log(reduce([1,2,3,4], 0, sum))
