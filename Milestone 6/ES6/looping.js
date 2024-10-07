const numbers = [1,2,3,4,5,6];

// * for of loop is for array

for (const number of numbers) {
  // console.log(number);
}

const name = 'Injamamul Islam Shimul';

for (const char of name) {
  // console.log(char);
}


// * for in loop is for object
const glass = {
	name: "glass",
	color: "transparent",
	price: "13",
	isCleaned: true,
};

for (const key in glass) {
  console.log(key, glass[key]);
}