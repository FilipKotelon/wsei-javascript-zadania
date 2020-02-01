document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prev = document.getElementById('prevPicture');
    const next = document.getElementById('nextPicture');
    const listElements = [... document.querySelectorAll('.slider li')];

    let curI = 0;

    console.log(slider, prev, next, listElements, curI);

    listElements[curI].classList.add('visible');

    const hideAndShowCurrent = (dir) => {
        listElements[curI].classList.remove('visible');

        if(dir === 'prev'){

            if(curI > 0){
                curI--;
            } else {
                curI = listElements.length - 1;
            }

        } else {

            if(curI < listElements.length - 1){
                curI++;
            } else {
                curI = 0;
            }

        }

        listElements[curI].classList.add('visible');
    }

    const prevClick = () => {
        hideAndShowCurrent('prev');
    }

    const nextClick = () => {
        hideAndShowCurrent('next');
    }

    prev.addEventListener('click', prevClick);
    next.addEventListener('click', nextClick);
})

//Obrazki znikają ze strony, ponieważ za bardzo zmniejszamy lub powiększamy indeks, przez co wychodzi on poza granice tablicy