class Vehicle{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log("gari chole na chole na chole na re gari chole na");
  }
}

// extends the Vehicle property to the Bus class

class Bus extends Vehicle{
  constructor(name, price, seat, ticketPrice){
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }

}

class Truck extends Vehicle{
  constructor(name, price, load) {
    super(name,price);
    this.load = load;
  }
}
