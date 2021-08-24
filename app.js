
// Screens
const block_screen = document.getElementById("block_screen");
const settings_app_screen = document.getElementById("settings_app_screen")


//Buttons
const home_button = document.getElementById("home_button");


// apps
const settings_app = document.getElementById("settings_app")


// TUMB
const airplane_mod_tumb = document.getElementById("airplane_mod_tumb");
const airplane_mod_tumb_cyc = document.getElementById("airplane_mod_tumb_cyc");

// 0-OFF 1-ON
let tumb_of_on = 0


let time_div_block_screen = document.getElementById("time_div_block_screen");
let time_div_header = document.getElementById("time_div_header");

let scr_block_or = 1;


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
    if (scr_block_or == 1) {
        block_screen.style.transform = "translateY(-150%)"
    }

    settings_app_screen.style.display = "none"
}) 

settings_app.addEventListener("click", () => {
    settings_app_screen.style.display =  "flex"
})


//TUMB OFF-ON

airplane_mod_tumb.addEventListener("click", () =>  {
    if (tumb_of_on == 0) {

        airplane_mod_tumb.style.backgroundColor = "green";
        airplane_mod_tumb_cyc.style.marginLeft = "47%";

        tumb_of_on = 1

    } else if (tumb_of_on == 1) {

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        tumb_of_on  = 0
    }
})