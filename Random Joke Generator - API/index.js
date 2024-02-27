const jokeContainer = document.querySelector("p");
const btn = document.querySelector("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.innerText = `${item.joke}`;
        console.log( jokeContainer.innerText = `${item.joke}`);
    });
}
btn.addEventListener("click",getJoke);
getJoke();