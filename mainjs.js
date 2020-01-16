function dayDate() {
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", "
 + d.getFullYear();;

 document.getElementById("currentdate").textContent = fulldate;
}

function year() {
     let year = d.getFullYear();
     document.getElementById("currentYear").textContent = year;
}

function dateTime() {
    let d = new Date();
    let time = d.getTime();
    let fullDateTime = Date + " " + time;

    document.getElementById("lastUpdatedDateTime").textContent = fullDateTime;
}