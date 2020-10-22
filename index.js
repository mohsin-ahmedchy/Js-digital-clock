function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);


    hours = checkTime(hours);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.querySelector("#clock").innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}
//set AM/PM
function convertFormat(time){
    let format = "AM";
    if(time >= 12){
        format = "PM";
    }
    return format;
}
//set Hours
function checkTime(time){
    if(time > 12){
        time -= 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}
// add Zero
function addZero(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}

showTime();
setInterval(showTime, 1000);
