document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //Zadanie 0
    const title = document.querySelector('.title');

    function getDataAnimation(element){
        let animationData = element.dataset.animation;
        return animationData;
    }

    console.log(getDataAnimation(title));

    //Zadanie 1
    const home1 = document.querySelector('#home');
    const home2 = document.getElementById('home');

    const firstLi = document.querySelector('[data-direction]');
    const firstBlock = document.querySelector('.block');

    console.log({home1, home2, firstLi, firstBlock});

    //Zadanie 2
    const navLi = document.querySelectorAll('nav li');
    const paragraphs = document.querySelectorAll('div p');
    const articleDivs = document.querySelectorAll('article div');

    console.log({navLi, paragraphs, articleDivs});

    //Zadanie 3
    const firstArticle = document.querySelector('article.first');
    const headings = firstArticle.querySelectorAll('h1');
    console.log(headings.length);
});
