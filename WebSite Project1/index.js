var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    const elem1Img = val.childNodes[3];
    val.addEventListener("mouseenter", function () {
        elem1Img.style.opacity = 1;
    })
    val.addEventListener("mouseleave", function () {
        elem1Img.style.opacity = 0;
    })
    val.addEventListener("mousemove", function(dets){
        elem1Img.style.left = dets.x+"px";
        // elem1Img.style.top = dets.y+"px";
    })
})
