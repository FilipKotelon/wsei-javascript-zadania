document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            const nextEl = this.nextElementSibling;
            if(!nextEl) return;

            if(nextEl.style.display != 'none'){
                nextEl.style.display = 'none';
            }
            else{
                nextEl.style.display = 'block';
            }
        })
    }
})