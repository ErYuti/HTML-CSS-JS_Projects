var arr =[
    {
        dp:"1.jpg",
        storty:"6.jpg"
    },
    {
        dp:"2.jpg",
        storty:"7.jpg"
    },
    {
        dp:"3.jpg",
        storty:"8.jpg"
    },
    {
        dp:"4.jpg",
        storty:"9.jpg"
    },
    {
        dp:"5.jpg",
        storty:"10.jpg"
    }
];
var clutter="";
var storye = document.querySelector(".storyes");
var fullScren = document.querySelector("#full-screen")
arr.forEach(function(elem,index){
    clutter += `<div class="story">
    <img id=${index} src="${elem.dp}" alt="">
</div>`;
})
storye.innerHTML = clutter;
storye.addEventListener("click",function(dets){
    var value = arr[dets.target.id].storty;
    fullScren.style.display ='block';
    fullScren.style.backgroundImage =`url(${value})`;

    setTimeout(function(){
        var value = arr[dets.target.id].storty;
    fullScren.style.display ='none';
    },3000)

});