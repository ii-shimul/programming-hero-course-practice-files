const arr = [1, 3, 4, 5, 6, 7];
console.log(arr); // gives the full array
console.log(...arr); //  gives only the elements

console.log(Math.max(arr)); // result is NaN
console.log(Math.max(...arr)); // gives the proper result

// proper way to copy an array

const newArr = [...arr];
// const newArr = [...arr, 8];
console.log(newArr);