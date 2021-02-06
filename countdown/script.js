const day1 = document.getElementById('Days');
const hours1 = document.getElementById('hours');
const miun1 = document.getElementById('minutes');
const second1 = document.getElementById('seconds');

const newYears = '1 January 2022 ';

function countdown() {
    const newYearDate = new Date(newYears);
    const currDate = new Date();

    const Totalseconds = (newYearDate - currDate) / 1000;

    const Days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600);
    const miun = Math.floor(Totalseconds / 60);
    const seconds = Math.floor(Totalseconds);

    day1.innerHTML = Days;
    hours1.innerHTML = hours;
    miun1.innerHTML = miun;
    second1.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);