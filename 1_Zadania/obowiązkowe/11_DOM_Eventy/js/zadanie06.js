document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('box');
    const globalX = document.getElementById('globalX');
    const globalY = document.getElementById('globalY');
    const localX = document.getElementById('localX');
    const localY = document.getElementById('localY');

    div.addEventListener('mousemove', function(e) {
        globalX.textContent = e.pageX;
        globalY.textContent = e.pageY;
        localX.textContent = e.offsetX;
        localY.textContent = e.offsetY;
    })
})