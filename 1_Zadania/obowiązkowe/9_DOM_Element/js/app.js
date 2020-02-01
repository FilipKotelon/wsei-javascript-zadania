document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    const getDatasInfo = (elements) => {
        const arr = [];

        for(let i = 0; i < elements.length; i++){
            arr.push(elements[i].dataset.color);
        }

        return arr;
    }

    console.log(getDatasInfo(links));

    //Zadanie 1
    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    for(let i = 0; i < childElements.length; i++){
        console.log('tag: ' + childElements[i].tagName, 'klasa: ' + childElements[i].className);
    }

    for(let i = 0; i < blocks.length; i++){
        console.log('tag: ' + blocks[i].tagName, 'klasa: ' + blocks[i].className);
    }

    for(let i = 0; i < links.length; i++){
        console.log('tag: ' + links[i].tagName, 'klasa: ' + links[i].className);
    }

    //Zadanie 2
    for(let i = 0; i < blocks.length; i++){
        //Wyświetla wewnętrzny kod HTML elementu
        console.log(blocks[i].innerHTML);
        //Wyświetla cały kod HTML elementu
        console.log(blocks[i].outerHTML);
        //Zmienia wewnętrzny kod HTML elementu
        blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks';
    }

    //Zadanie 3
    const mainFooter = document.querySelector('#mainFooter');
    const getId = (element) => {
        console.log('id: ' + element.id);
    }

    console.log(getId(mainFooter));

    //Zadanie 4
    const getTags = (elements) => {
        const arr = [];

        for(let i = 0; i < elements.length; i++){
            arr.push(elements[i].tagName);
        }

        return arr;
    }

    console.log(getTags(childElements));

    //Zadanie 5
    const getClassInfo = (element) => {
        return [... element.classList];
    }

    console.log(getClassInfo(banner));

    //Zadanie 6
    const allNavLi = document.querySelectorAll('nav li');
    const setDataDirection = (elements) => {
        for(let i = 0; i < elements.length; i++){
            if(!elements[i].dataset.direction){
                elements[i].dataset.direction = 'top';
            }
        }
    }

    setDataDirection(allNavLi);
});
