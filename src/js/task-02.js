const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// створюэмо елемент
const creList = ing => {
  const element = document.createElement(`li`);
  element.textContent = ing;
  element.classList.add('item');
  return element
}

// перебираэмо масив ingredients
const result = ingredients.map( ingredient => {
  return creList(ingredient)
});

// знаходим список
const list = document.querySelector('#ingredients');

// повертаэмо елемент
list.append(...result)
