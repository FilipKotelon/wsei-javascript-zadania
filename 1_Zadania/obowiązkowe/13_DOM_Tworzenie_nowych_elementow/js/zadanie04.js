document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('remove');
    const list = document.querySelector('.list');

    btn.addEventListener('click', () => {
        while(list.children.length > 0){
            list.removeChild(list.children[0]);
        }
    })
})