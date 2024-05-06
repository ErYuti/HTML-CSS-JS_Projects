let clock = document.querySelector(".clock");

let digiClock =()=>{
    const nowDate = new Date();
    console.log(nowDate);
    let year = nowDate.getFullYear();
    let hours = nowDate.getHours();
    let min = nowDate.getMinutes();
    let sec = nowDate.getSeconds();

    const time = `
    <span>${year}<span>:
    <span>${hours}<span>:
    <span>${min}<span>:
    <span>${sec}<span>
    `
    clock.innerHTML = time;
}
setInterval(digiClock,1000)
digiClock();