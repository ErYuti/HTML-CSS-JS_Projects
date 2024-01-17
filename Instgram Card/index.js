//Add-- Remove Friend
var stn = document.querySelector("p");
var addFrd = document.querySelector(".add");
var removeFrd = document.querySelector(".remove");

addFrd.addEventListener("click", function () {
    stn.innerHTML = "New Friend Added";
    stn.style.color = "green";
})

removeFrd.addEventListener("click", function () {
    stn.innerHTML = "Remove Friend";
    stn.style.color = "grey";
})

//heart
var con = document.querySelector(".card");
var icon = document.querySelector("i");

con.addEventListener("dblclick", function () {
    console.log("hellow");
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    //for some time set used for dealy inbuild borwser function
    setTimeout(function () {
        icon.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 900)
})

//cursor move
var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})