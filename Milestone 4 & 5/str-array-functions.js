const country = "Bangladesh";
const division = "New Khali";
const district = "B-Baria";
// const thana = new String('Demra'); //object
// console.log(thana);

// console.log(district[0]);

// string is immutable

district[0] = "F";

// console.log(district[0]); // value will not change

let str = "I am an introvert";

// console.log(str.split(" ")); // splits the string according a char

let str2 = ["I", "am", "an", "introvert"];

// console.log(str2.join("-")); // opposite of split

// concat = joins two string together

let first = "II";
let last = "Shimul";
let fullName = first + last;
// console.log(first.concat(' ').concat(last));

// includes = checks if a character is present in the string or not

console.log(last.includes("h"));

// reverse a string

let reverse = "";

for (const letter of str) {
  reverse = letter + reverse;
}
// console.log(reverse);

let rev = str.split('').reverse();
console.log(rev.join(''));
