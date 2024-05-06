let btn = document.getElementById(".btn");

btn.addEventListener("click", function() {
    var inputText = document.getElementById("inputText");
    inputText.select();
    document.execCommand("copy");
    alert("Text copied to clipboard: " + inputText.value);
});