document.addEventListener('DOMContentLoaded', () => {
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');

    const btns = document.querySelectorAll('.moveBtn');

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            const parent = this.parentElement;

            if(list1.contains(parent)){
                list2.appendChild(parent);
            }
            else{
                list1.appendChild(parent);
            }
        })
    }
})