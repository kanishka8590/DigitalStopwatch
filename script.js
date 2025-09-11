let hours = 0, minutes = 0, seconds = 0;
let timer;

const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps');

function updateTime() {
  seconds++;
  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0; hours++; }

  timeDisplay.textContent = 
    `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

document.getElementById('start').onclick = () => {
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

document.getElementById('pause').onclick = () => {
  clearInterval(timer);
}

document.getElementById('reset').onclick = () => {
  clearInterval(timer);
  hours = minutes = seconds = 0;
  timeDisplay.textContent = '00:00:00';
  lapsList.innerHTML = '';
}

document.getElementById('lap').onclick = () => {
  if (hours === 0 && minutes === 0 && seconds === 0) return;
  const lapItem = document.createElement('li');
  lapItem.textContent = timeDisplay.textContent;
  lapsList.appendChild(lapItem);
}
