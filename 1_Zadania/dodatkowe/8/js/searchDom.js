//1.
const menu = document.getElementById('menu');

function getDataInfo(element){
    const arr = [];
    const children = [... element.querySelectorAll('li')];

    children.forEach(child => {
        arr.push(child.dataset.info);
    })

    return arr;
}

console.log(getDataInfo(menu));

//2.
const mainContener = document.getElementById('main-contener');

function getElementClass(element){
    return [... element.classList];
}

console.log(getElementClass(mainContener));

//3.
const pinkColor = document.querySelector('.pink-color');

function getElementText(element){
    return element.textContent;
}

console.log(getElementText(pinkColor));

//4.
const images = [... document.querySelectorAll('.images')];

function getElementAlt(element){
    const arr = [];

    element.forEach(el => {
        arr.push(el.alt);
    })

    return arr;
}

console.log(getElementAlt(images));

//5.
const links = [... document.querySelectorAll('.my-link')];

function getElementHref(element){
    const arr = [];

    element.forEach(el => {
        arr.push(el.href);
    })

    return arr;
}

console.log(getElementHref(links));