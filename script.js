// Declaration function
// Expression function
// Arrow function(2015)



const btn=document.getElementById("dark-btn");

const btn2=document.getElementById("light-btn");


btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})

btn2.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})

