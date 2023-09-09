function updateDateTime(){
    let currentDate = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let milliseconds = currentDate.getMilliseconds();

    
    formattedTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds) + ":" + milliseconds


    document.querySelector("[data-testid =currentDayOfTheWeek]").textContent = dayOfWeek;
    document.querySelector("[data-testid=currentUTCTime]").textContent = formattedTime;

}

function padNumber(number) {
    if (number < 10) {
        return "0" + number;
    }

    return number;
}


updateDateTime();

setInterval(updateDateTime, 1)