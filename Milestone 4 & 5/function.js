function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}


