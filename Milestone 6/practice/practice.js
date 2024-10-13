// task 1

setTimeout(() => {
	// console.log("this was consoled after 3 seconds");
}, 3000);

function delayedGreeting(name, time) {
	setTimeout(() => {
		console.log(`Hello ${name}`);
	}, time);
}

// delayedGreeting('Alice', 1000)

// task 2

let count = 0;
const tellJoke = () => {
  const intervalId = setInterval(() => {
    count++;
    if (count >= 5) {
      clearInterval(intervalId);
    }
    console.log("Why don't scientists trust atoms? Because they make up everything!");
  },200)
}
// tellJoke();

let message = "Hello!";
setTimeout(() => {
	message = "Goodbye!";
}, 0);
console.log(message);