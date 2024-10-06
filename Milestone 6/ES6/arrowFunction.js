// expression function
const add = function (a, b) {
	return a + b;
};

// arrow function

const add2 = (a, b) => a + b;

const sum = add2(5,5);
console.log(sum);

// for single parameter
const third = num => num[2];
const nums = [1,2,3,4,5];

console.log(third(nums));

// no parameter
const getPI = () => Math.PI; 
console.log(getPI());

// big arrow function for return

const doMath = (a,b,c) => {
	const sum = a+b+c;
	const mult = a*b*c;
	const result = sum + mult;
	return result;
}

console.log(doMath(1,2,3));



