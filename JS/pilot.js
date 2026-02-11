let myStr = "Aaryan"; //immutable
myStr[0] = "M";
//console.log(myStr);


let myArr = [10,20,40]; //mutable
myArr[2]=30;
//console.log(myArr);
//console.log(myArr.length);


// myArr.shift() removes first element of the array
//myArr.unshift(40); makes the argument element the first element of the array

// myArr.push(40); this appends an element to the array



//console.log("new array :" , myArr);

//push and pop are faster than shift and unshift 

let elements = [60,61,62,65];

//conventional for loop
for(let i = 0 ; i < elements.length ; i++){
  //console.log(elements[i]);
  
}


//for..of loop
//console.log("result using for..of loop");

for(key of elements){
  //console.log(key);
  
}
//classic for loop can be used to manipulate iteration logic , for..of loop doesnt give you that functionality.


//slice and splice
let myArr2 = [70,71,72]
let ans = myArr2.concat(myArr)
//console.log(ans);

const cp = [...myArr2]
//console.log(cp);


let h = ans.slice(2);
//console.log(h);

//console.log(ans.includes(71));


const nested = [1 , [2 , [3]]]
//console.log(nested.flat(Infinity));


//basic functions

function greet(name) {
  return `Hello ${name}`
}


aaryanName = greet("Aaryan")
//console.log(aaryanName);
//calling before definition works 

//example

//console.log(add(2,3));

function add(a,b){
  return a+b;
}


const myF = function(a,b){
  return a-b
}

//console.log(myF(4,5));


myAF = (c,k) => {
  return `${c} ${k}`
}
//console.log(
//myAF("h","i"));


function multiplyALL(...nums){
  product= 1;
  for(num of nums){
    product*= num;
  }
  return product
}

//console.log(multiplyALL(1,2,3,4,5));

//type conversion

let num = 0
//console.log(Boolean(num));


let arr = [1,2,3]
//console.log(String(arr)[2]);

let co = []
for(k of arr){
  if(k == ",") continue;
  else{
    co.push(k)
  }
}

//console.log(co);


let strnum = "99,0"
//console.log(Number(strnum));

//console.log(typeof -"123");


let str = ""
//console.log(Boolean(str));

//console.log("5" !== 5);


//objects 

let person = {
  name : "Aaryan",
  "age" : 18,
  "stats" : [2 , 45 , 1]

}

let username = "name"



console.log(person.stats.push(9));
console.log(person);
console.log(person[username]);


person.league = "platinum"
console.log(person);

console.log();

person[username] = "john"
console.log(person.name);

delete person.name
console.log(person);


const myObj = {
  greeting : "salut",
  "guest" : "Paul",
  greet : function(){
    return `${this.greeting} ${this.guest}`
  }

}

console.log(myObj.greet())

console.log(Object.keys(myObj));
console.log(Object.values(person));
console.log(Object.entries(myObj));



const inventory = {
  apples : 50,
  bananas : 60 , 
  pear : 70
}

for([fruit , quantity] of Object.entries(inventory)){
  console.log(`${fruit} : ${quantity}`);
  
}


const obj1 = {name : "RYAN"}
obj2 = obj1

console.log(obj1.name);

const cpy = {...obj1}
cpy.name = "AARYAN"

console.log(cpy);
console.log(obj1);


document.get