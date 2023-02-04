const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (input.value != ''){
        let favChap = input.value;

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent=favChap;
        deleteButton.textContent='x';
        list.appendChild(listItem);
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);});
        listItem.appendChild(deleteButton);
    }
    input.value = '',
    input.focus();
});