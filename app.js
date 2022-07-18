let timeDisplay = document.querySelector(".timerDisplay");
let start = document.getElementById("startTimer");
const stop = document.getElementById("resetTimer");



let eyyup;
let [ms, s, min] = [0, 0, 0];


document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.classList.contains("start") ) {
        if (start.classList.contains("start")) {
            start.classList.remove("start");
            start.innerHTML = `<i class="fa-solid start fa-pause"></i>`;
            eyyup = setInterval(timer, 10)
        }
        else {
            start.classList.add("start");
            start.innerHTML = `<i class="fa-solid start fa-play"></i>`;
            clearInterval(eyyup);
        }
    }
    else if (e.target.classList.contains("stp")) {
        clearInterval(eyyup);
        timeDisplay.innerHTML = `00 : 00 : 00`;
        [ms, s, min] = [0, 0, 0];

        start.classList.add("start");
        start.innerHTML = `<i class="fa-solid start fa-play"></i>`;
    }
})

function timer () {
    ms += 1;
    if (ms == 100) {
        ms = 0;
        s++;
        if (s == 60) {
            s = 0;
            min++;
        }
    }
    let mss = ms < 10 ? "0"+ms : ms;
    let ss = s < 10 ? "0"+s : s;
    let mins = min < 10 ? "0"+min : min;
    
    timeDisplay.innerHTML = `${mins} : ${ss} : ${mss}`;
}