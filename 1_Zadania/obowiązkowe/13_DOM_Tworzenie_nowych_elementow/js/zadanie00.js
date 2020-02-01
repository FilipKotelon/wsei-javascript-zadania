document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.deleteBtn');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            const parentRow = this.parentElement.parentElement;
            if(!parentRow) return;
            
            parentRow.parentElement.removeChild(parentRow);
        })
    }
})