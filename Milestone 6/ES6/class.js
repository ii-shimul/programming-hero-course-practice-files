class Product {
	country = "Bangladesh";
  constructor(name){
    this.name = name;
  }
	speak(talk) {
		console.log(`talking about ${talk}`);
	}
}

const talk = new Product("le le lenovo");
console.log(talk);

talk.speak("oba kita kau");
