const parents = document.querySelectorAll('.parent');

for(let i = 0; i < parents.length; i++){
    parents[i].addEventListener('mouseenter', function() {
        const child = parents[i].querySelector('.children');
        child.style.display = 'block';
    })

    parents[i].addEventListener('mouseleave', function() {
        function hideChildrenElement(){
            const child = this.querySelector('.children');
            child.style.display = 'none';
        }

        hideChildrenElement.bind(this)();
    })
}