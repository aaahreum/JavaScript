const clock = document.querySelector(".clock");

function getTimes() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const h = `${hour < 10 ? `0${hour}` : `${hour}`}`;
  const m = `${min < 10 ? `0${min}` : `${min}`}`;
  const s = `${sec < 10 ? `0${sec}` : `${sec}`}`;

  clock.innerText = `${h}:${m}:${s}`;
}

function init() {
  getTimes();
  setInterval(getTimes, 1000);
}

init();
