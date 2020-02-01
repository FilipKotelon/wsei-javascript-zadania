document.addEventListener('DOMContentLoaded', () => {
    const imgApple = document.querySelector('img[alt="Apple"]');
    const imgUbuntu = document.querySelector('img[alt="Ubuntu"]');
    const imgWindows = document.querySelector('img[alt="Windows"]');
    const imgs = [imgApple, imgUbuntu, imgWindows];
    const select = document.querySelector('select');

    const changeImg = () => {
        let curImg;

        if(select.value === 'Os X'){
            curImg = imgApple;
        } else if(select.value === 'Ubuntu'){
            curImg = imgUbuntu;
        } else if(select.value === 'Windows'){
            curImg = imgWindows;
        }

        for(let i = 0; i < imgs.length; i++){
            imgs[i].style.display = imgs[i] === curImg ? 'block' : 'none';
        }
    }

    changeImg();
    select.addEventListener('input', changeImg);
})