var bulb= document.querySelector(".bulb");
var btn = document.querySelector("button");
var light = 0;
 
btn.addEventListener("click",function(){
    if (light==0){
        bulb.style.backgroundColor ="yellow";
        bulb.style.boxShadow = "0 0 100px yellow";
        console.log("click and light ON");
        light=1;
    }
    else{
        bulb.style.backgroundColor ="white";
        bulb.style.boxShadow = "0 0 0 white";
        console.log("click and light OFF")
        light=0;
    }
})