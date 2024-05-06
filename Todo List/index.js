const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");


btn.addEventListener("click", () => {
    let inputText = input.value.trim();
    if (inputText !== "") {
        let li = document.createElement("li");
        li.backgroundColor = "rgba(0, 31, 63, 0.397)";
        li.textContent = inputText;


        let deletbtn = document.createElement("button");
        deletbtn.className = "delete"
        deletbtn.innerHTML = "Remove"
        deletbtn.addEventListener("click", () => {
            li.remove();
        })


    ul.appendChild(li);
    li.appendChild(deletbtn);
    input.value = "";
    
}
})