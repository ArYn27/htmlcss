document.getElementById("btn").addEventListener('click' , function(){
    let name = document.getElementById("name")
    let error = document.getElementById("error")
    if(!name.value){
        error.textContent = "please fill out the name"
        error.style.color = "red" 
        error.style.fontFamily ="Arial"
        error.style.fontSize = "10px"
    }
    else{
        error.textContent = "success!"
        error.style.color = "green"
        error.style.fontFamily ="Arial"
        error.style.fontSize = "10px"
    }
})