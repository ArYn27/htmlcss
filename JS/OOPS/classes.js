class Vehicle {
    constructor(make , model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make} `
    }
}

//inheritance 
class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota" , "Corolla")
console.log(myCar.start());
console.log(myCar.drive());

