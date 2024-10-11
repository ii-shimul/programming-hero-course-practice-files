// similar to setTimeout, but it executes like a loop

let count = 0;

// setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000)

const clockId = setInterval(() => {
	count++;
	if (count > 9) {
		clearInterval(clockId);
	}
	console.log(clockId, count);
}, 1000);
