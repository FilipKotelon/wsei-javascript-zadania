document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('#button1, #button2, #button3');

    for(let i = 0; i < btns.length; i++){
        const counter = btns[i].nextElementSibling.querySelector('.counter');

        btns[i].addEventListener('click', function() {
            counter.textContent = parseInt(counter.textContent) + 1;
        })
    }
})