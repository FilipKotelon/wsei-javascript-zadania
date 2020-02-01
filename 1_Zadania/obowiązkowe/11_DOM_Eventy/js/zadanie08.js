document.addEventListener("DOMContentLoaded", function () {
    const windowWidth = document.getElementById('windowWidth');
    const windowHeight = document.getElementById('windowHeight');

    function calcWindow(){
        windowWidth.textContent = window.innerWidth + 'px';
        windowHeight.textContent = window.innerHeight + 'px';
    }

    window.addEventListener('resize', calcWindow);
    calcWindow();
});
