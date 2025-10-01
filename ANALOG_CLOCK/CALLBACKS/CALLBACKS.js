const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hrs = document.querySelector(".hrs");

setInterval(()=>{
    const date= new Date();
    const seconds=date.getSeconds();
    const minutes=date.getMinutes();
    const hours=date.getHours();

    console.log(seconds);
    sec.innerText=seconds;
    min.innerText=minutes;
    hrs.innerText=hours;

},1000)