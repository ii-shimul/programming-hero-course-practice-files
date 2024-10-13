function checkAge() {
	const ageField = document.getElementById("age");
	const ageText = ageField.value;
	const errorTag = document.getElementById("error");
	try {
		const age = parseInt(ageText);
		if (isNaN(age)) {
			throw "Enter a valid number";
		} else if (age < 18) {
			throw "baccha kaccha not allowed";
		}
		errorTag.innerHTML = "";
	} catch (error) {
		console.log("Error:", error);
		errorTag.innerHTML = "Error: " + error;
	} finally {
		console.log("it will execute no matter what");
	}
	console.log(123);
}
