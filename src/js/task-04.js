const value = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener("click", () => {
  // console.log('-1');
  value.textContent -= 1;
});

increment.addEventListener("click", () => {
  // value.textContent = Number(value.textContent) + 1;
  value.textContent -= -1;
});

// console.log(value);
// console.log(increment);

// data-action="decrement"
// data-action="increment"
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
