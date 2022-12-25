
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const fun = () => {
    // console.log(nameInput.value);
    if (nameInput.value !== '') {
        nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = 'Anonymous';
    }   
}

nameInput.addEventListener('input', fun )


// Під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

