document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.listContainer');

    for(let i = 0; i < containers.length; i++){
        containers[i].addEventListener('mouseover', function(){
            const listItems = this.querySelectorAll('.list li');
            if(listItems.length == 0) return;

            listItems[0].style.color = 'red';

            for(let j = 1; j < listItems.length - 1; j++){
                listItems[j].style.color = 'blue';
            }

            listItems[listItems.length - 1].style.color = 'green';
        })
    }
})