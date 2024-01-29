var starE=document.querySelectorAll(".fa-star");
var emojiE=document.querySelectorAll(".emj");

var colorsArt =["red","brown" ,"blue","orange ","green"];
starE.forEach((starE,index) => {
    starE.addEventListener("click",() => {
        updateRating(index);
    });
})
 function updateRating(index){
    starE.forEach((starE,idx)=>{
        if(idx < index + 1){
            starE.classList.add("active");
        }
        else{
            starE.classList.remove("active");
        }
    })
 
    emojiE.forEach(emojiE=>{
        emojiE.style.transform = `translateX(-${index *50}px)`;
        emojiE.style.color=colorsArt[index]
    })
}
