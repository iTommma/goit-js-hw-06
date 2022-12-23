// list = document.body.children[1].children;
// console.log(list);

// const listWithId = document.querySelector('#categories').children;
// console.log(listWithId);

// innerHTML
// innerText

const menuItemsByClass = document.querySelectorAll('.item');

console.log(menuItemsByClass.length);

for (const items of menuItemsByClass) {
    console.log(items.querySelector('h2').innerText);
    console.log(items.querySelectorAll('li').length);
}

