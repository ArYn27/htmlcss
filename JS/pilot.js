const myObj = {
    'name' : "Aaryan",
    'age' : 19
    
}

console.log(myObj.age);

const myObj2 = {
    info: {
        'names' : ['Aaryan' , 'Arnav' , 'Shourya'],
        'ages' : [19 , 20 , 21] 
    },

    addresses : ['Noida sector-45' , 'Rohini sector-21' , 'Noida sector-62']

}

console.log(myObj2.info.names[0]); //gives us 'Aaryan'...
console.log("first js file");

console.log("this is a mod");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (answer) => {
  console.log("Hello", answer);
  rl.close();
});