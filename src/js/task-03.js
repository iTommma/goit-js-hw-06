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
const createGalaryEl = images.map((el,idx,arr) => { 
  const { url, alt } = el;
  // console.log(idx,url,alt);
  
  return `
    <li class='gallery-item'>
      <img class='img' width="400px" src="${url}" alt="${alt}">
    </li>`
 } )

// знайти елемент Юл
const list = document.querySelector('.gallery');
// console.log(list);

// повернути галерею
list.insertAdjacentHTML("afterbegin", createGalaryEl.join(''));
// console.log(createGalaryEl.join(''));
 


