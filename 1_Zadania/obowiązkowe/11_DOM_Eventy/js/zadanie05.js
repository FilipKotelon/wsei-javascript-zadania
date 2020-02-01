document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('#box1, #box2, #box3');

    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener('click', function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            this.style.backgroundColor = randomColor;
        })
    }
})