//learning loops and challenges 

const { log } = require("console");

//guidelines for loops:
    //keyword 
    //termination condition
    //body of loop
    //types of loops :
        //do/while
        //while
        //for
            //for/in
            //for/of
            //for/each

/*
    1. write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable 
*/
let sum = 0;
let it = 1
while (it <= 500) {
    sum = sum+it;
    it =  it+1;
}

console.log(sum);


/*
    2. write a while loop that counts down from 5 to 1 and stores numbers in an array named countdown
*/

let a = [];
let cnt = 5;
console.log("Countdown begins !");
while(cnt >= 0){
    console.log(cnt);
    a.push(cnt);
    cnt = cnt -1;
}
console.log(`array is :- ${a}`);

/*
    3. write a do while loop that prompts a user to enter their favorite tea type until they enter "stop" . Store each tea type in an array named `teaCollection`.
*/

//need to writ this line as node.js doesn't support prompt by default.
const prompt = require("prompt-sync")();

teaCollection = [];
let tea;
do{
    tea = prompt('enter your fav tea type: ')
    if(tea !== "stop"){
    teaCollection.push(tea);
    }
} while(tea !== "stop");

console.log(teaCollection);

/*
    4. write a do while loop that adds numbers from 1 to 3 and stores the sum in a variable `total`.
*/

let total = 0;
let count = 1;
do{
    total = total+count;
    count++;
} while(count <= 3);

console.log(total);

/*
    5. write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`
*/


let test = [2,4,6];
let multipliedNumbers = [];

for (let i = 0; i < test.length; i++) {
    const element = test[i]*2;
    multipliedNumbers.push(element);
}

console.log(multipliedNumbers);


/*
    6. write a `for` loop that lists all the cities in the array `[Paris , New York , Tokyo , London]`
    and stores each city in a new array named `cityList`
*/

let text2 = ["Paris" , "New York" , "Tokyo" ,"London"];

let cityList = [];

for (let i = 0; i < text2.length; i++) {
    const element = text2[i];
    console.log(`${i}th city:- ${element}`);
    cityList.push(element);
}
console.log(cityList);
