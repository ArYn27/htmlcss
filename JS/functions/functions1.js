/*
    challenege 1 
*/

const { log } = require("console");

function makeTea(teatype) {
    return `Making ${teatype}`
}

console.log(makeTea("green tea"));


// challenge 2 (nested function)

function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for ${teaType}`;
    }
    let ans = confirmOrder();
    console.log(ans);
    
}

orderTea("green tea")


//challenge 3 (arrow function)

const calculateTotal = (price , quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(100 , 200);

console.log(totalCost);


//higher order functions 

function MakeTea(teaType) {
    return `Making ${teaType}`;
}

function processTeaOrder(MakeTea) {
    let res = MakeTea("earl grey")
    console.log(res);
}

processTeaOrder(MakeTea);


function createTeaMaker() {
    return function MakeTea(teaType) {
        return `Making ${teaType}`;
    }
}

let res = createTeaMaker()("green tea");
console.log(res);
