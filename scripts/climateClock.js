"use strict";

setInterval("countdown()", 1000);

function countdown() {
    const endOfClock = new Date("21 July 2029");
    var currentDay = new Date();
    var timeLeft = endOfClock - currentDay;

    const years = Math.floor(timeLeft / (1000*60*60*24*365));
    const yearInMilliseconds = years * (1000*60*60*24*365);
    timeLeft -= yearInMilliseconds;
  
    const months = Math.floor(timeLeft / (1000*60*60*24*30));
    const monthInMilliseconds = months * (1000*60*60*24*30);
    timeLeft -= monthInMilliseconds;
  
    const days = Math.floor(timeLeft / (1000*60*60*24));
    const dayInMilliseconds = days * (1000*60*60*24);
    timeLeft -= dayInMilliseconds;
  
    const hours = Math.floor(timeLeft / (1000*60*60));
    const hourInMilliseconds = hours * (1000*60*60);
    timeLeft -= hourInMilliseconds;
  
    const minutes = Math.floor(timeLeft / (1000*60));
    const minuteInMilliseconds = minutes * (1000*60);
    timeLeft -= minuteInMilliseconds;
  
    const seconds = Math.floor(timeLeft / 1000);

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
