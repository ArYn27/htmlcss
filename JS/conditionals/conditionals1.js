//check if one number is greater than the other
let num1 = 15
let num2 = 21

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log(`${num2} is greater than ${num1}`);
    
}

//check if two strings are equal 

let string1 = "Aaryan";
let string2 = "AaryaN";

if(string1 == string2){
    console.log("equal");
    
}
else{
    console.log("unequal");
    
}

//check if a variable is a number or not 

let value = 92

if(typeof value == "number"){
    console.log("is a number");
    
}
else{
    console.log("NaN");
    
}

console.log(typeof value);


//check if array is empty or not 

items = []
if(items.length){
    console.log("not empty");
}
else{
    console.log("empty");
    
}