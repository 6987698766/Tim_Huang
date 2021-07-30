//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//define vars to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//var to holds setInterval() funciton

let interval = null;

//var to  hold stopwatch status
let status = "stopped";

//stopwatch funciton (logic to determine when to increment next value,etx..)
function stopWatch(){
    seconds++;

    //logic to determine when to increment next value
    if (seconds / 60 ===1){
        seconds = 0;
        minutes++;
        if (minutes / 60 ===1){
            minutes = 0;
            hours ++;
        }

    }
    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds<10){
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }
    if (minutes<10){
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours<10){
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop(){
    
    if(status === "stopped"){

        //Start the stopWatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStop').innerHTML = "Stop";
        status = "started";
        
    }
    else {

        window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = "Start";
        status = "stopped";
    }
}

//function to reset the timer
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerHTML = "00:00:00"
    document.getElementById('startStop') = "Start";
}