function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls [type="number"]');
const buttonCreate = document.querySelector("#controls [data-create]");
const buttonDestroy = document.querySelector("#controls [data-destroy]");
const divBoxes = document.querySelector("#boxes");
// console.log(getRandomHexColor() );

let amount = 0;
// inputNumber.addEventListener( 'input', onNumber );
buttonCreate.addEventListener("click", onNumber);
buttonDestroy.addEventListener("click", () => (divBoxes.innerHTML = ""));

// Перевірка на валідність
function onNumber() {
  amount = inputNumber.valueAsNumber;
  if (amount < 1 || amount > 100) {
    alert("Кількість елементів має бути від 1 до 100");
  } else {
    createBoxes(amount);
  }
}

// Створення колекції
function createBoxes(amount) {
  // console.log('createBoxes');

  let allBox = "";
  for (let i = 1; i <= amount; i += 1) {
    // console.log(i);

    const size = 20 + 10 * i;
    allBox += `<div style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px" > ${i} </div>`;
    // console.log(allBox);

    divBoxes.innerHTML = allBox;
  }
}
