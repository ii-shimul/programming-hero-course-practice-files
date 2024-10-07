// ? one

const mult = (a, b, c) => a * b * c;

// ? two

const str = `I am a web developer.
I love to code.
I love to solve problems`;

// ? three

const arrow = (a, b = 0) => a + b;

// ? four

const names = ["shimul", "minhaj", "mihad", "emad", "harun"];

const even = (names) => {
	const evenNames = [];
	for (const name of names) {
		if (name.length % 2 == 0) {
			evenNames.push(name);
		}
	}
	return evenNames;
};

console.log(even(names));

// ? five

const max = (arr, brr) => {
	const nrr = [...arr, ...brr];
	return Math.max(...nrr);
};

console.log(max([1,2,3],[4,5,6]));
