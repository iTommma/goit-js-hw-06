
const fontSizeControl = document.querySelector('#font-size-control');
const myText = document.querySelector('#text');
// console.log(fontSizeControl);
// console.log(text);


const onText = () => {
    const value = fontSizeControl.value;
    myText.style.fontSize = value + 'px';
}

document.addEventListener('input', onText);

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.