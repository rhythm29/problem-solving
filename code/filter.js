const filter = (arr, fun) => {
  let b = []
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      b.push(arr[i])
    }
  }
  return b;
}

function even(num) {
  return num % 2 === 0;
}

module.exports = filter;

