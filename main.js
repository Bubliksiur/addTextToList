const textInput = document.querySelector('.textInput');
const addButton = document.querySelector('.addButton');
const pool = document.querySelector('.pool');

addButton.addEventListener('click', () => {
    const newTextValue = textInput.value.trim();

    if (newTextValue === '') {
        alert('Please enter a valid item.');
        return;
    }

    const newText = document.createElement('span');
    newText.textContent = newTextValue;

    const delate = document.createElement('button');
    delate.textContent = 'X';
    newText.appendChild(delate);
    pool.appendChild(newText);

    delate.addEventListener('click', () => {
        pool.removeChild(newText);
    });

    textInput.value = '';
});