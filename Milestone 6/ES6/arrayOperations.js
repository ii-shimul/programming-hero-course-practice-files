const numbers = [1, 2, 3, 4, 5, 6, 7];

const doubleIt = (num) => num * 2;

// * map = iterates through every element and does operations and returns value

// const result = numbers.map(doubleIt);
const result = numbers.map((num) => num * 2);

// console.log(result);

// ! without map
const doubled = [];

for (const num of numbers) {
	const double = num * 2;
	doubled.push(double);
}


// * foreach = just like map but it doesn't return any value

numbers.forEach((n) => console.log(n)); // doesn't save any value


// * filter = it filters elements according to condition

const filter = numbers.filter((n) => n > 3); // filters elements greater than 3


// * find = finds an element which meets the condition (if it finds more than one element, it returns the first one)
// * returns undefined if no element was found

const find = numbers.filter((n) => n > 3); // finds element greater than 3


// * reduce = operates through the whole array to do a specific operation like sum and average 

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // here the zero is the value of accumulator
console.log(sum);