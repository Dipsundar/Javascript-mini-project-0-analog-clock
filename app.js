const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const displayTime = () => {
  let date = new Date();

  // getting hour(hh), minutes(mm), seconds(ss) from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // calculate hands rotation of hour, minutes, seconds
  let hourRotation = 30 * hh + mm / 2;
  let minuteRotation = 6 * mm;
  let secondsRotation = 6 * ss;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minutes.style.transform = `rotate(${minuteRotation}deg)`;
  seconds.style.transform = `rotate(${secondsRotation}deg)`;
};

setInterval(displayTime, 1000);
