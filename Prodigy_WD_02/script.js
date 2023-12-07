let timer;
let isRunning = false;
let milliseconds = 0;
let laps = [];

function startPause() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("display").innerHTML = formatTime(milliseconds);
    document.querySelector("button").innerHTML = "Resume";
  } else {
    timer = setInterval(run, 10); // Change interval to 10 milliseconds
    document.querySelector("button").innerHTML = "Pause";
  }
  isRunning = !isRunning;
}

function run() {
  milliseconds += 10;
  document.getElementById("display").innerHTML = formatTime(milliseconds);
}

function reset() {
  clearInterval(timer);
  milliseconds = 0;
  isRunning = false;
  document.getElementById("display").innerHTML = formatTime(milliseconds);
  document.querySelector("button").innerHTML = "Start";
  laps = [];
  updateLaps();
}

function recordLap() {
  laps.push(formatTime(milliseconds));
  updateLaps();
}

function updateLaps() {
  const lapsList = document.getElementById("laps");
  lapsList.innerHTML = "";
  laps.forEach((lap, index) => {
    const lapItem = document.createElement("li");
    lapItem.innerHTML = `Lap ${index + 1}: ${lap}`;
    lapsList.appendChild(lapItem);
  });
}

function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(
    remainingMilliseconds
  )}`;
}

function pad(number) {
  return number < 10 ? `0${number}` : number;
}
