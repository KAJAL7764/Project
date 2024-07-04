let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();

let countdown = document.getElementById("countdown");

const weekDays = ["Sun", "Mon", "Teu", "Wen", "Thu", "Fri", "Sat"];

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

day.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
date.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();







