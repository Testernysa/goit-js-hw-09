

let interval;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');


function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}


startButton.addEventListener('click', () => {

  if (interval) {
    return;
  }


  changeBackgroundColor();
  interval = setInterval(changeBackgroundColor, 1000);


  startButton.disabled = true;
  stopButton.disabled = false;
});


stopButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;


  startButton.disabled = false;
  stopButton.disabled = true;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
