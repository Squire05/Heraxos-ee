// JS FILE

let time_div = document.getElementById("time_div");

setInterval(() => {
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes()
    time_div.innerText = h + ":" + m 
}, 1000);