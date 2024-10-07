const glass = {
	name: "glass",
	color: "transparent",
	price: "13",
	isCleaned: true,
};

const keys = Object.keys(glass);

// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);

 //[ 'glass', 'transparent', '13', true ]

const entries = Object.entries(glass);

// array of array, two dimensional array
// [
// 	["name", "glass"],
// 	["color", "transparent"],
// 	["price", "13"],
// 	["isCleaned", true],
// ]

// * delete a property from an object
delete glass.isCleaned;

// with destructuring
const {isCleaned, ...shortGlass} = glass; // isCleaned will be deleted

// * freezing an object will not any other deletion or addition to the object

Object.freeze(shortGlass);
delete shortGlass.price;

