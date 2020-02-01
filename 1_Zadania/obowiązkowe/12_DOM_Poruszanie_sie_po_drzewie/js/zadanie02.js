document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            const parent = this.parentElement;
            if(!parent) return;
            
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            parent.style.backgroundColor = randomColor;
        })
    }
})