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
