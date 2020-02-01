document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Element ${menu.children.length + 1} - w chwili dodania było ${menu.children.length} elementów`;

        menu.appendChild(newItem);
    })
})