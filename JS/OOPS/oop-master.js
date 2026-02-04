let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start : function() {
        return `The ${this.make} ${this.model} was started in the year ${this.year}`
    }
}
//console.log(car.start());


function Person(name , age){
    this.name = name
    this.age = age
}

let john = new Person("John" , 20)
//console.log(john.name);


//prototype and prototypal chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function () {
    return `Custom method ${this}`
}

let myArray = [1,2,3]
console.log(myArray.hitesh());

