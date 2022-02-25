var i = 0;
var txt = "Welcome";
var speed = 100;

function load() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(load, speed);
    }
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
        r.style.setProperty("--inv-0", "0");
        r.style.setProperty("--inv-1", "2");
    } else {
        x.setAttribute("class", "fa fa-sun");
        r.style.setProperty("--font-light", "#ffffff");
        r.style.setProperty("--font-dark", "#000000");
        r.style.setProperty("--bg-light", "#F4F4F5af");
        r.style.setProperty("--bg-dark", "#18181Baf");
        r.style.setProperty("--inv-0", "1");
        r.style.setProperty("--inv-1", "0");
    }
}