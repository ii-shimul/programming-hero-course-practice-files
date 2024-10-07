// data access
const data = [{ id: 1, name: "john" }];

console.log(data[0].name);

const product = {
	laptop: {
		name: ["asus", "apple"],
	},
};

console.log(product.laptop.name[1]);
console.log(product.laptop?.name[1]); // optional chain
