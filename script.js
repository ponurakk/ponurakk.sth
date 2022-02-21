var i = 0;
var txt = 'Welcome';
var speed = 100;
var ended = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function load() {
    if (i < txt.length && ended==false) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(load, speed);
        // if (i == txt.length && txt=='Welcomee') {
        //     document.getElementById("welcome").innerHTML = '';
        //     i=0;
        //     txt='too';
        // }
        // if (i == txt.length && txt=='too') {
        //     document.getElementById("welcome").innerHTML = '';
        //     i=0;
        //     txt='thiss';
        //     await sleep(1000);
        // }
        // if (i == txt.length && txt=='thiss') {
        //     document.getElementById("welcome").innerHTML = '';
        //     i=0;
        //     txt='page';
        // }
    }
    // if (i == txt.length) {
    //     ended=true
    //     document.getElementById("welcome").innerHTML = txt.slice(0, -1);
    //     i--;
    //     setTimeout(load, speed);
    // }
}

function changeTheme() {
    var x = document.getElementById("button");
    var r = document.querySelector(":root");

    if (x.getAttribute("class") == "fa fa-sun") {
        x.setAttribute("class", "fa fa-moon");
        r.style.setProperty("--font-light", "#000000");
        r.style.setProperty("--font-dark", "#ffffff");
        r.style.setProperty("--bg-light", "#18181Baf");
        r.style.setProperty("--bg-dark", "#F4F4F5af");
    } else {
        x.setAttribute("class", "fa fa-sun");
        r.style.setProperty("--font-light", "#ffffff");
        r.style.setProperty("--font-dark", "#000000");
        r.style.setProperty("--bg-light", "#F4F4F5af");
        r.style.setProperty("--bg-dark", "#18181Baf");
    }
}