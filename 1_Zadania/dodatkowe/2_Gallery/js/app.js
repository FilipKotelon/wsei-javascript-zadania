document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const listElements = [... document.querySelectorAll('.gallery li')];
    const pageBody = document.querySelector('body');

    console.log(gallery, listElements, pageBody);

    const closeGallery = () => {
        const fullScreen = document.querySelector('.fullScreen');
        fullScreen.parentElement.removeChild(fullScreen);
    }

    //Nie było zakomentowanego kodu, więc staram się odzwierciedlić z klas css
    const createFullscreen = (imgSrc) => {
        const fullscreen = document.createElement('div');
        fullscreen.classList.add('fullScreen');

        const img = document.createElement('img');
        img.src = imgSrc;

        const close = document.createElement('button');
        close.classList.add('close');
        close.textContent = 'Close';

        fullscreen.appendChild(close);
        fullscreen.appendChild(img);

        close.addEventListener('click', closeGallery);

        return fullscreen;
    }

    listElements.forEach(el => {
        el.querySelector('img').addEventListener('click', function(){
            const fullscreen = createFullscreen(this.src);
            pageBody.appendChild(fullscreen);
        })
    })
})

//U mnie strona działa dobrze, prawdopodobnie problem mógłby się pojawić, jeśli event kliknięcia przycisku
//zostałby podpięty tylko raz. W moim przypadku jest podpinany za każdym razem, kiedy zostaje stworzony, więc nie ma błędów.