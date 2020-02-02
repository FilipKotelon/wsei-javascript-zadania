document.addEventListener('DOMContentLoaded', () => {
    const firstLevelElements = [... document.querySelectorAll('.nav > ul > li')];

    const actOnList = (el, callback) => {
        const list = el.querySelector('ul');

        if(list){
            callback(list);
        }
    }

    const mouseOverEl = function(){
        actOnList(this, (list) => {
            list.style.display = 'block';
        });
    }

    const mouseOutEl = function(){
        actOnList(this, (list) => {
            list.style.display = 'none';
        });
    }

    firstLevelElements.forEach(el => {
        el.addEventListener('mouseover', mouseOverEl);
        el.addEventListener('mouseout', mouseOutEl);
    })
})

//Działa dobrze