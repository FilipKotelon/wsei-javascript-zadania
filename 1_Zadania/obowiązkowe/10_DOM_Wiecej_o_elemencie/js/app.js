document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0
    const doExercise0 = () => {
        const container = document.querySelector('.exercise.ex5');
        const listItems = container.querySelectorAll('ul li');

        for(let i = 0; i < listItems.length; i++){
            if(i % 2 === 0){
                listItems[i].style.backgroundColor = 'green';
            }
            if(i === 4){
                listItems[i].classList.add('big');
            }
            if(i % 3 === 0){
                listItems[i].style.borderBottom = '1px solid red';
            }
        }
    }

    doExercise0();

    //Zadanie 1
    const doExercise1 = () => {
        const container = document.querySelector('.exercise.ex1');

        const chromeLogo = container.querySelector('.chrome');
        const edgeLogo = container.querySelector('.edge');
        const firefoxLogo = container.querySelector('.firefox');

        edgeLogo.style.backgroundImage = 'url(./assets/img/edge.png)';
        firefoxLogo.style.backgroundImage = 'url(./assets/img/firefox.png)';

        chromeLogo.nextElementSibling.textContent = 'Chrome';
        edgeLogo.nextElementSibling.href = 'https://www.microsoft.com/en-us/edge';
        firefoxLogo.nextElementSibling.textContent = 'Firefox';
        firefoxLogo.nextElementSibling.href = 'https://www.mozilla.org/pl/firefox/new/';

        chromeLogo.style.width = '100px';

        //Kod CSS dopisany jest przez Javascript w tym miejscu, ponieważ dodawany styl jest dedykowany tylko dla tego elementu, nie dla np. klasy
    }

    doExercise1();

    //Zadanie 2
    const doExercise2 = () => {
        const name = document.getElementById('name');
        const favColor = document.getElementById('fav_color');
        const favMeal = document.getElementById('fav_meal');

        name.innerHTML = 'Filip';
        favColor.innerHTML = 'Zielony';
        favMeal.innerHTML = 'Pizza';
    }

    doExercise2();

    //Zadanie 3
    const doExercise3 = () => {
        const container = document.querySelector('.exercise.ex3');
        const list = container.querySelector('ul');
        const listItems = container.querySelectorAll('ul li');
        const errorElements = container.querySelectorAll('.error');

        list.classList.add('menu');

        for(let i = 0; i < listItems.length; i++){
            listItems[i].classList.add('menuElement');
        }

        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].classList.remove('error');
        }
    }

    doExercise3();

    //Zadanie 4
    const doExercise4 = () => {
        const container = document.querySelector('.exercise.ex4');
        const listItems = container.querySelectorAll('ul li');

        for(let i = 0; i < listItems.length; i++){
            listItems[i].dataset.id = i + 1;
        }
    }

    doExercise4();
});