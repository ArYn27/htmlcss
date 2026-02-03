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

function stringToNumber(input) {
    if(isNaN(Number(input))) return "Not a number!"
    else{
        return Number(input)
    } 
}

let a52 = stringToNumber("abc")
console.log(a52);

function flipBoolean(input) {
    if(input) return false;
    else return true;
}

console.log(flipBoolean("a"));

function whatAmI(input) {
   if(typeof(input) == "number") return "I'm a number!"
    return "I'm a string!"
}

console.log(whatAmI("hello"));

function isItTruthy(input) {
    if(input) return "It's truthy!"
    return "It's falsey!"
}

console.log(isItTruthy(0));


// Addition of two values
function add() {
    return a+b;
}

// Subtract small value from larger one
function subtract() {
    if(a > b) return a-b;
    return b-a;
}

function multiply() {
    return a*b;
}

// Divide larger value by small
function divide() {
    if(a > b) return a/b;
    return b/a;
}

// Increase value of a by 1
function increment() {
    return a+1;
}

// Decrease value of b by 1
function decrement() {
    return b-1;
}

// Divide larger value by small to find the reminder
function reminder() {
    if(a > b) return a%b;
    return b%a;
}

function filterNumbers(arr) {
    
    return arr.filter(item => typeof item === "number");
}

function reverseArray(arr) {
    arr.reverse();
    return arr;
}

function findMax(arr) {
    let max = -1000000000000;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element > max) max = element;
        
    }
    return max;
}

function removeDuplicates(arr) {
    arr = [... new Set(arr)]
    return arr;
}

function flattenArray(arr) {

    return arr.flat(Infinity);
}

let answer = removeDuplicates([1,2,2,4,4,5])
console.log(answer);

function sumOfN(n) {

    return (n*(n+1))/2;
}

function printMultiplicationTable(n) {
    let res = [];
    for (let i = 1; i <= 10; i++) {
        res.push(`${n} * ${i} = ${n*i}`)
        
    }
    return res;
}

function countVowels(str) {
    let vowels = ['a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            count+=1;
        }
    }
    return count;
}

let k = sumOfN(10)
console.log(k);


 let h = printMultiplicationTable(9);
 console.log(h);
  
 let g = countVowels("Aaryan")
 console.log(g);


const person = {
    name : "Hitesh",
    age : 19.5,
    introduce(){
        return `Hi my name is ${this.name} and I am ${this.age} years old`
    }
};




function outer() {

    function inner() {
        return "Inner function called"
    }
    return inner();
}

console.log(outer());
