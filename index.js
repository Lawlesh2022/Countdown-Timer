const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
let dispDays =0;
let dispHours = 0;
let dispMinutes = 0;
let dispSeconds = 0;

const newYear = "1 Jan 2023"

function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    const totalSeconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/3600)%60;
    const seconds = Math.floor(totalSeconds)%60;
    if (days<10){ 
        dispDays = '0'+days.toString()
    }
    else{
        dispDays = days;
    }
    if (hours<10){ 
        dispHours = '0'+ hours.toString()
    }
    else{
        dispHours = hours;
    }
    if (minutes<10){ 
        dispMinutes = '0'+ minutes.toString()
    }
    else{
      dispMinutes = minutes
    }
    if (seconds<10){ 
        dispSeconds = '0'+ seconds.toString()
    }
    else{
        dispSeconds = seconds;
    }
    console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = dispDays
    hoursEl.innerHTML = dispHours
    minutesEl.innerHTML = dispMinutes
    secondsEl.innerHTML = dispSeconds

}

countdown()
setInterval(countdown, 1000)