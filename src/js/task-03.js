const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// перебрати масив і стврити елементи 
const createGalary = images.map(({ url, alt }) => { 
  console.log( url, alt );
  return `<li class='item'>
    <img class='img' src="${url}" alt="${alt}">
  </li>`
 } )

// знайти елемент Юл
const list = document.querySelector('.gallery')
console.log(list);

console.log('1 ', createGalary);
// повернути галерею
 list.insertAdjacentHTML("afterbegin", ...createGalary)