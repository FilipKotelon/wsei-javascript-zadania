const articles = document.querySelectorAll('article');
const firstLink = articles[0].querySelector('a');
const secondLink = articles[1].querySelector('a');

const showContent = function(){
    const content = this.parentElement.querySelector('.content');
    content.style.display = 'block';
}

firstLink.addEventListener('click', showContent)
secondLink.addEventListener('mouseover', showContent)