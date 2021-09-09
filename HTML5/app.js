const canvas = document.querySelector('#clock');
const context = canvas.getContext('2d');
const clockRadius = canvas.height / 2;

function drawClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(clockRadius, clockRadius, 3, 0, 2 * Math.PI);
    context.fill();

    context.font = clockRadius / 10 + 'px arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (let i = 1; i < 13; i++) {
        context.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2 * Math.PI / 12), clockRadius - (clockRadius * 0.9 * Math.cos(i * 2 * Math.PI / 12)));
    };

    let fullHours = hours % 12 + minutes / 60 + seconds / 3600;
    let hoursAngle = fullHours * 2 * Math.PI / 12;
    let minutesAngle = minutes * 2 * Math.PI / 60;
    let secondsAngle = seconds * 2 * Math.PI / 60;

    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + (clockRadius * 0.6 * Math.sin(hoursAngle)), clockRadius - (clockRadius * 0.6 * Math.cos(hoursAngle)));
    context.lineWidth = 5;
    context.strokeStyle = 'white';
    context.stroke();

    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + (clockRadius * 0.8 * Math.sin(minutesAngle)), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
    context.lineWidth = 3;
    context.strokeStyle = 'white';
    context.stroke();

    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + (clockRadius * 0.8 * Math.sin(secondsAngle)), clockRadius - (clockRadius * 0.9 * Math.cos(secondsAngle)));
    context.lineWidth = 2;
    context.strokeStyle = 'white';
    context.stroke();
};

setInterval(drawClock, 1000);