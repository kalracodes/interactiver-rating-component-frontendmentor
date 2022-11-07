var rating = document.querySelector(".rating");
var thanks = document.querySelector(".thanks");
// rating.style.display ="none";
thanks.style.display ="none";
var dom = document.getElementById("dom");
var submit = document.getElementById("submit");
var rate = document.querySelectorAll(".btn");
submit.addEventListener("click",()=>{
    rating.style.display ="none";
    thanks.style.display ="block";
})

rate.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        dom.innerHTML = rate.innerHTML;
    })
})