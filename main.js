//находим элементы
const btn = document.querySelector('#btn');
const colorDisplay = document.querySelector('.color');
const body = document.querySelector('body');

const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

//функция рандом
function randomColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomIndex];
    }
    return hexColor;
  }

let timerId = null; 

btn.addEventListener('click', () => {
  clearTimeout(timerId);  //очистка таймера
  const randomColorName = randomColor(); 
  body.style.backgroundColor = randomColorName; 
  colorDisplay.textContent = randomColorName;
  timerId = setTimeout(() => {
    changeBackgroundColor();
  }, 4000); 
});


function changeBackgroundColor() {
    const randomColorName = randomColor();
    body.style.backgroundColor = randomColorName;
    colorDisplay.textContent = randomColorName;
    timerId = setTimeout(changeBackgroundColor, 4000);
  }

// Инициализация таймера при загрузке страницы
changeBackgroundColor();

