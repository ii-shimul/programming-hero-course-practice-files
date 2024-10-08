// problem 1
const arr = [1, 3, 5, 7, 9];
const even = arr.map((n) => n + 1);
// console.log(even);

// problem 2

const arr2 = [33, 50, 60, 22, 55, 70, 100];
const tenDivisible = arr2.filter((n) => n % 10 == 0);
// console.log(tenDivisible);

// problem 3

const instructor = [
	{ name: "Nodi", age: 28, position: "Senior" },
	{ name: "Akil", age: 28, position: "Junior" },
	{ name: "Sabuj", age: 28, position: "Senior" },
];

const arr3 = instructor
	.filter((i) => i.position == "Senior")
	.map((i) => i.name);
// console.log(arr3);

const people = [
	{ name: "meena", age: 20 },
	{ name: "meena", age: 15 },
	{ name: "meena", age: 22 },
];

const sum = people.reduce((s, person) => s + person.age, 0);
console.log(sum);
