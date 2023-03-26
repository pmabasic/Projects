const daysEl = document.getElementById('daysEl');
const hoursEl = document.getElementById('hoursEl');
const minsEl = document.getElementById('minutesEl');
const secondsEl = document.getElementById('secondsEl')

let date = '1 Jan 2024';

function countDown() {
    let currentDate = new Date();
    let winterDate = new Date(date);

    let totalSeconds = (winterDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(() => {
    countDown();
}, 1000);