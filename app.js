// JS FILE

const block_screen = document.getElementById("block_screen");
const home_button = document.getElementById("home_button");

let time_div_block_screen = document.getElementById("time_div_block_screen");
let time_div_header = document.getElementById("time_div_header");


setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (m <= 9) {
        m = "0" + m
    }

    time_div_block_screen.innerText = h + ":" + m;

    time_div_header.innerText = h + ":" + m;



    
}, 1000);


home_button.addEventListener("click", () => {
    block_screen.style.transform = "translateY(-150%)"
}) 