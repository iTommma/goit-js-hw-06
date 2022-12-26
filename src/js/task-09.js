function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
// console.log(button);

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  // console.log( getRandomHexColor() );
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
