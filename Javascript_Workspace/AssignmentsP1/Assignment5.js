dateString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
dateToday = new Date();
dayToday = dateToday.getDay();
timeToday = dateToday.toLocaleTimeString();
for (i = 0; i < dateString.length; i++) {
    if (dayToday == i) {
        console.log("Today is :", dateString[i]);
    }
}
console.log("Current time is :", timeToday);