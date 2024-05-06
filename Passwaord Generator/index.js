let btnPass = document.querySelector(".btnPass");
let btnCopy = document.querySelector(".btnCopy");
let innerTextDiv = document.getElementById("passwordDisplay");

btnPass.addEventListener("click",()=>{
    let char = "qwertyuioplkjhgfdsazxcvbnm,./!@#$%^&*1234567890QWERTYUIOPLKJHGFDSAZXCVBNM<>?)("
    let password = "";
    for(let i=0; i<8; i++){
        let random = Math.floor(Math.random()*char.length);
        password += char[random]
    }

    innerTextDiv.textContent = password;
})

btnCopy.addEventListener("click",()=>{
    var range = document.createRange();
    range.selectNode(innerTextDiv);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Clear the selection after copying
    alert("Password copied to clipboard!");
  })