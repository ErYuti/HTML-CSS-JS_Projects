const btn = document.querySelector('button');
const h1 = document.querySelector('.quote');

function getQuote(){
    fetch('https://api.kanye.rest')
    .then((res)=> res.json())
    .then((data)=>{
        const{quote}= data;
        h1.innerText = quote;
        console.log(quote);
    })
}
window.addEventListener("load", getQuote);
btn.addEventListener('click',getQuote)
getQuote()

