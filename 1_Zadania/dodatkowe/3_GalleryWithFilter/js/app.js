document.addEventListener('DOMContentLoaded', () => {
    const galleryElements = [... document.querySelectorAll('#gallery img')];
    const hideBtn = document.getElementById('hideButton');
    const showBtn = document.getElementById('showButton');
    const tagInput = document.getElementById('tagInput');

    console.log(galleryElements, hideBtn, showBtn, tagInput);

    let curTag;

    const filterElements = (act) => {
        console.log(tagInput.value);
        curTag = tagInput.value;
        tagInput.value = '';

        galleryElements.forEach(el => {
            if(el.dataset.tag.indexOf(curTag) >= 0){
                act(el);
            }
        })
    }

    const hideClick = () => {
        filterElements((el) => {
            el.classList.add('invisible');
        });
    }

    const showClick = () => {
        filterElements((el) => {
            el.classList.remove('invisible');
        });
    }

    hideBtn.addEventListener('click', hideClick);
    showBtn.addEventListener('click', showClick);
})

//Działa dobrze