// declaration of an object
const phone = {
  brand: "realme",
  model: "7pro",
  ram: 8,
  rom: 128,
  price: 28000,
  specifications: {
    processor: "snapdragon",
    display: "super amoled",
  },
};

//? dot notation
// console.log(phone.brand);

//? bracket notation
// console.log(phone["ram"]);

//? value changing
phone.price = 16000;
// console.log(phone.price);

//? using another variable to change an object property

const newDisplay = "display";
phone[newDisplay] = "LCD";
// console.log(phone);

//? printing the property names of the object
// const keys = Object.keys(phone);
// console.log(keys);

//? printing values
const values = Object.values(phone);
// console.log(values);

//? nested object
const college = {
  name: "sstc",
  class: ["11", "12"],
  subject: {
    science: ["phy", "chem", "bio"],
    commerce: ["economic", "money", "banking"],
  },
};

// console.log(college.subject.science);

//? delete a property
// delete college.class;
// console.log(college);

//! for of = array
//! for in = object

//? looping in object
// way one
for (const prop in college) {
  // console.log(prop);
  // console.log(college[prop]);
}

// way two
const keys = Object.keys(college);
// console.log(keys);
for (const key of keys) {
  // console.log(key, ':' ,college[key]);
}


//? another way to declare an object
const book = new Object({name : 'atomic habits', price: '300tk'});
console.log(book);

const laptop = Object.create({});