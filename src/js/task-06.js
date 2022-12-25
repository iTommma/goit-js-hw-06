
const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.getAttribute('data-length') * 1;

// console.log(validationInput, dataLength);

const onBlur = () => {
    const valueLength = validationInput.value.length;

    // if (valueLength === dataLength) {
    //     console.log('yas', valueLength === dataLength);
    //     // validationInput.classList.remove('invalid')
    //     // validationInput.classList.add('valid');
    //     validationInput.setAttribute('class','valid')
    // } else {
    //     console.log('no', valueLength === dataLength);
    //     validationInput.setAttribute('class','invalid')
    //     // validationInput.classList.add('invalid');
    // }

    valueLength === dataLength ? validationInput.setAttribute('class', 'valid') : validationInput.setAttribute('class', 'invalid');
        
    
}

validationInput.addEventListener('blur', onBlur)



// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.