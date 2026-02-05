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



// Encapsulation

class BankAccount {
    #balance = 0;
    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `${this.#balance}`
    }
}

let account = new BankAccount()
//console.log((account.balance));


//Abstraction
class coffeeMachine{
    start(){
        //call DB
        //filter val
        return `starting the machine...`
    }

    brewCoffee(){
        //complex calculation
        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone = this.start()
        let msgtwo = this.brewCoffee()
        return `${msgone} + ${msgtwo}`
    }   

}

let myMachine = new coffeeMachine()
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
//console.log(myMachine.pressStartButton());


//polymorphism

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly!`
    }
}

let bird = new Bird()
let penguin = new Penguin()
//console.log(bird.fly());
//console.log(penguin.fly());


//static method 
//to create methods that nobody can use by creating an object
class Calculator{
     static add(a,b){
        return a+b
    }
}

//let miniCalc = new Calculator();
//console.log(miniCalc.add(2,3));
//console.log(Calculator.add(2,3));
//you can make the class call it directly .

//getters and setters 
 
class Employee{
    
    #salary;
    
    constructor(name , salary){
        if(salary < 0){
            throw new error("Salary cannot be negative")
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }
        else{
            this._salary = value
        }
    }

}

let emp = new Employee("alice" , -50000)
console.log(emp._salary);
emp.salary = -60000