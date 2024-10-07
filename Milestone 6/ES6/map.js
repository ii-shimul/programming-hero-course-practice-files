const numbers = [1,2,3,4,5,6,7];

const doubleIt = num => num*2;

// * map

const result = numbers.map(doubleIt);
console.log(result);



// !
const doubled = [];

for (const num of numbers) {
  const double = num * 2;
  doubled.push(double);
}
