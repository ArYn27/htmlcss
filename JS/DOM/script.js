console.log("hello from script");

//example 1
//grab the event first
//in query selector , use "#" for the id , "." for the classes
//document.querySelector('') this is not ideal to use
// document.querySelectorAll select all elements with the pattern
/*document
    .getElementById('changeTextButton')
    .addEventListener('click' , function () {
        let paragraph = document.getElementById('myParagraph')
        paragraph.textContent = "the paragraph has been changed"
        
    })

*/
 /*   EventListener takes two parameters as input (event , function)
    event being the behaviour performed before the function is called on
    a certain element of the webpage . here , we use normal functions not 
    arrow functions.
*/

document
    .getElementById('changeTextButton')
    .addEventListener('click' , function(){
        let paragraph = document.getElementById('myParagraph')
        paragraph.textContent = "this paragraph has been changed"
    });


    //example 2

    document.getElementById('highlightFirstCity')
    .addEventListener('click' , function(){
        let citiesList = document.getElementById("citiesList")
        citiesList.firstElementChild.classList.add('highlight')
         
    })

    //example 3

    document.getElementById("changeOrder").addEventListener('click' , function () {
        let coffeeType = document.getElementById("coffeeType")
        coffeeType.textContent = "Espresso"
        coffeeType.style.backgroundColor = "brown"
        coffeeType.style.padding = "5px"
    })

    //example 4

    document.getElementById("addNewItem").addEventListener('click' , function(){
        let newItem = document.createElement('li')
        newItem.textContent = "Eggs"

        document.getElementById("shoppingList").appendChild(newItem)
    })

    //example 5
    document.getElementById("removeLastTask").addEventListener('click' , function(){
        let taskList= document.getElementById("taskList")
        taskList.lastElementChild.remove();
    })