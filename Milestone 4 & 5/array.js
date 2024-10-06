// const arr = [12, 24];
// console.log(arr);

// console.log(arr.length);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  // console.log(array[i]);
}

//? reverse an array

//* this method reverses the original array
// array.reverse();
// console.log(array);

// * this does not
const revArray = [];
for (const i of array) {
  revArray.unshift(i);     
}
console.log(revArray);
