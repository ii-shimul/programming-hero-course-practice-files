const me = {
	name: "shimul",
	age: "22",
	money: "0",
	phone: "0100000000",
};

// if right side is an object left side of destructuring will be an object as well
// use property name as variable

// const {phone} = me;
const { phone, age: boyos } = me;

// * array destructuring

const nums = [45, 54];
let [first, second] = nums;

console.log(first, second);

const [x, y] = [12, 8]; // declaring two variables at the same time
[x, y] = [y, x] // swapping values

function double(x, y) {
	return [x * 2, y * 2];
}

[first, second] = double(5, 10);
console.log(first, second); 