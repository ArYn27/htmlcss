submitBtn = document.getElementById("btn")
submitBtn.onclick = function(){
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
}


let obj = {
    name : "aaryan",
    place : "noida",
    age : 19,
    cgpa : 7.1,
    leetcode : "550+",
    codeforces : "2400"
}

console.log(Object.values(obj)[1]);
