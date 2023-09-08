function updateDateTime(){
    let currentDate = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let milliseconds = currentDate.getMilliseconds();

    formattedTime = padNumber(hours)

}