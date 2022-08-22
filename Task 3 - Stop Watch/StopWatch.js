var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("startBtn");
var timeout = null;
var ms = 0;
var sec = 0;
var min = 0;
 function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
 
    timeout = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        start();
 
    }, 10); 
}
 
function stop() 
{
    clearTimeout(timeout);
    startBtn.disabled = false;


}
 
function reset() {
    clearTimeout(timeout);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
    ms = 0;
    sec = 0;
    min = 0;
}

function lap() {
    lapNow = `<div class="lap">${min} : ${sec} : ${ms} </div>`;
    lapRecord.innerHTML += lapNow;
  }
  
  lapBtn.addEventListener('click', lap);
  startBtn.addEventListener('click', start);
  stopBtn.addEventListener('click', stop);
  resetBtn.addEventListener('click', reset);