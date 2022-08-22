let clock=()=> {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = " ";
    if(hours<=12)
    {
        period="AM"
    }
    if (hours == 0) {
      hours = 12;
      period="AM"
    } 
    else if (hours >= 12) {
      hours = hours - 12;
      period = "PM";
    }
    if(hours<10)
    {
        hours="0"+hours;
    } 
    if(minutes<10)
    {
        minutes="0"+minutes;
    }
    if(seconds<10)
    {
        seconds="0"+seconds;
    }
    let time = `${hours}:${minutes}:${seconds}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();
  