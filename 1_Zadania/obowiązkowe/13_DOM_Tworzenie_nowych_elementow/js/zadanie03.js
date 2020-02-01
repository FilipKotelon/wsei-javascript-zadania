document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('remove');

    btn.addEventListener('click', () => {
        btn.parentElement.removeChild(btn);
    })
})