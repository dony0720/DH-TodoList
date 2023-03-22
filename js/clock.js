const today = document.querySelector("h2#day");
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const todayDate = new Date();
  const dateArray = ['일','월','화','수','목','금','토'];
  const year = String(todayDate.getFullYear()).padStart(4, "0");
  const month = String(todayDate.getMonth()).padStart(2, "0");
  const date = String(todayDate.getDate()).padStart(2, "0");
  const day = dateArray[todayDate.getDay()];
  today.innerText =` ${year}.${month}.${date} (${day})`;
}

getDate();
getClock();
setInterval(getClock, 1000);