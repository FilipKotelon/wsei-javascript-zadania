document.addEventListener('DOMContentLoaded', () => {
    const firstElement = document.querySelector('.first').firstElementChild.children[2];
    const secondElement = document.querySelector('#second').parentElement.children[3];
    const childrenHelper = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild.children;
    const thirdElement = childrenHelper[Math.floor(childrenHelper.length / 2)];
    const fourthElement = document.querySelector('.forth').parentElement.querySelector('article:first-of-type > p:nth-of-type(2)');

    console.log(firstElement.dataset.answer);
    console.log(secondElement.dataset.answer);
    console.log(thirdElement.dataset.answer);
    console.log(fourthElement.dataset.answer);
})