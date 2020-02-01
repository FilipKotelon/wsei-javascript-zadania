document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('#button1, #button2, #button3');
    const counter = document.querySelector('.counter');

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function() {
            counter.textContent = parseInt(counter.textContent) + 1;
        })
    }
})