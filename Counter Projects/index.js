const h1 = document.querySelector("h2");
const addbtn = document.querySelector(".add");
const removebtn = document.querySelector(".remove");
const resetbtn = document.querySelector(".reset");
let count = 0;

addbtn.addEventListener("click", () => {
    count++;
    h1.innerHTML = count;
})
removebtn.addEventListener("click", () => {
    if (count <= 0) {
        count = 0
        h1.innerHTML = count;
    }
    else {
        count--;
        h1.innerHTML = count;
    }
})
resetbtn.addEventListener("click",()=>{
    count = 0
    h1.innerHTML = count;
})