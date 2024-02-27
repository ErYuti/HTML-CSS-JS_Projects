const btn = document.querySelector("button");
const h1 = document.querySelector('h1');
const image = document.querySelector('img');
const output = document.querySelector('span');

btn.addEventListener("click",()=>{
    fetch ('https://meme-api.com/gimme/wholesomememes')
    .then((res)=> res.json())
    .then((data)=>{
        const {author,title,url}= data;
        console.log(author,title,url);
        output.innerText = author;
        image.src = url;
        h1.innerText = title; 
    })
});






