let timer;
let startDate;
let endDate;

function startCountdown(){

    const userInput = document.getElementById("userDate").value;

    if(!userInput){
        alert("Please select a date");
        return;
    }

    startDate = new Date().getTime();
    endDate = new Date(userInput).getTime();

    clearInterval(timer);

    timer = setInterval(updateTimer,1000);

}

function updateTimer(){

    const now = new Date().getTime();

    const distancePending = endDate - now;
    const distanceCovered = now - startDate;

    if(distancePending <= 0){

        clearInterval(timer);

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        document.getElementById("progress_bar").style.width="100%";

        return;
    }

    const days = Math.floor(distancePending / (24*60*60*1000));
    const hrs = Math.floor((distancePending % (24*60*60*1000)) / (60*60*1000));
    const mins = Math.floor((distancePending % (60*60*1000)) / (60*1000));
    const secs = Math.floor((distancePending % (60*1000)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDuration = endDate - startDate;
    const progressPercent = (distanceCovered / totalDuration) * 100;

    document.getElementById("progress_bar").style.width = progressPercent + "%";

}