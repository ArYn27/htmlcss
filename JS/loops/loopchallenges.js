/*
    write a for loop that loops through the array ["green tea" , "black tea" , "chai", "oolong tea"] and stops the loop when it finds chai
*/



let a1 = ["green tea" , "black tea" , "chai" , "oolong tea"];
for (let i = 0; i < a1.length; i++) {
    const element = a1[i];
    if(element == "chai"){
        console.log(`chai found at index ${i}`);
        break;
    }
    
}

/*
    write a for loop that loops through an array and skips a particular element
*/

let a2 = ["London" , "New York" , "Paris" , "Berlin"];
let toSkip = "Paris";
let visitedCities = [];

for (let i = 0; i < a2.length; i++) {
    if(a2[i] == toSkip) continue;
    else{
        visitedCities.push(a2[i]);
    }
}
console.log(visitedCities);

//challenge 3  USING FOR-OF LOOP
let a3 = [1,2,3,4,5];
let store =[];
for(const element of a3){
    if (element == 4) {
        break;
    }
    store.push(element)
}   


console.log(store);


// challenge 4 USING FOR-OF LOOP 

let a4 = ["chai" , "green tea" , "herbal tea" , "black tea"];
let pt = [];
for(const tea of a4){
    if(tea == "herbal tea") continue;
    pt.push(tea);
}
console.log(pt);


/*
    WE LOOP THROUGH AN OBJECT USING A `FOR-IN` LOOP 

*/

//challenge 5 , looping through an object using a for in loop

let citiesPopulation = {
    "London" : 89000000,
    "New York" : 8400000,
    "Berlin" : 3500000,
    "Paris" : 2200000
 
}

let cityPopulations = {

}

for(const element in citiesPopulation){
    if(element == "Berlin") break;
    else{
        cityPopulations[element] = citiesPopulation[element];
    }
}
console.log(cityPopulations);
 


//challenge 6 

let WorldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris"  : 2200000
}

let largeCities = {};

for(const city in WorldCities){
    if(WorldCities[city] < 3000000) continue;
    else{
        largeCities[city] = WorldCities[city];
    }
}

console.log(largeCities);

/*
    forEach loop to loop through an array
    syntax :
        array.forEach((element) =>{
                `body of the code`
            });
            so in a foreach loop you can run a function on each element of the array

*/

//defining a function that skips "chai" and pushes the rest of the elements .

function pusher(element) {
    if(element == "chai") return null;
    else{
        
    }    
}

let a7 = ["earl grey" , "green tea" , "chai" , "oolong tea"];
let availableTeas = [];
a7.forEach(function(tea){                   //the scope of this loop is a functional scope not a loop
    if(tea == "chai") return;               //scope . so we need to use return to break the loop.
    else{
        availableTeas.push(tea);
    }
});

console.log(availableTeas);

//same challenge different array

let a8 = ["Berlin" , "Tokyo" , "Sydney" , "Paris"];
let travelledCities2 = [];
a8.forEach(element => {
    if(element == "Sydney") return;
    travelledCities2.push(element);
}); 

console.log(travelledCities2);


//challenge 9

let a9 = [2,5,7,9];
for (let i = 0; i < a9.length; i++) {
    if(a9[i] == 7) continue;
    else{
        a9[i] = a9[i]*2;

    }
    
}
console.log(a9);


let a10 = ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"];
let shortTeas = [];
for(const tea of a10){
    if(tea.length > 10) break;
    shortTeas.push(tea);
}

console.log(shortTeas);
