// list = document.body.children[1].children;
// console.log(list);

// const listWithId = document.querySelector('#categories').children;
// console.log(listWithId);

// innerHTML
// innerText

const menuItemsByClass = document.querySelectorAll('.item');

console.log(`Number of categories: ${menuItemsByClass.length}`);
console.log(``);
for (const items of menuItemsByClass) {
    console.log(`Category: ${ items.querySelector('h2').innerText }`);
    console.log(`Elements: ${items.querySelectorAll('li').length}`);
    console.log(``);
}
