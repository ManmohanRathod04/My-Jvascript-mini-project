let start = document.getElementById("Start");
let restart = document.getElementById("Restart");
let stop = document.getElementById('Stop');

let minutes = document.getElementById('min');
let second = document.getElementById('sec');
let miliseconds = document.getElementById('milisec');


let a;
let m = 0;
let s = 0;
let ms = 0;

function startStopWatch() {

    start.disabled=true;
    restart.disabled=false;
    stop.disabled=false;
  
    ms++;
    miliseconds.innerText = (ms <= 9) ? "0" + ms : ms;
    miliseconds.innerText = ms;
    if (ms == 100) {
        s++;
        ms = 0;
        if (s == 60) {
            m++;
            s = 0;
            minutes.innerText = (m <= 9) ? "0" + m : m;
        }

        second.innerText = (s <= 9) ? "0" + s : s;
    }

    a = setTimeout(startStopWatch, 10);

  
}

function stopStopWatch() {
    clearTimeout(a);

    start.disabled=false;
    restart.disabled=false;
    stop.disabled=true;
}

function restartWatch() {
    ms = 0;
    s = 0;
    m = 0;
    clearTimeout(a);
    minutes.innerHTML = "00";
    miliseconds.innerHTML = "00";
    second.innerHTML = "00";

    start.disabled=false;
    restart.disabled=true;
    stop.disabled=false;

}


start.addEventListener('click', startStopWatch);
stop.addEventListener('click', stopStopWatch);
restart.addEventListener('click', restartWatch);









