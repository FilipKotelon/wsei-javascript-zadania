document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submit = form.querySelector('button');

    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');
    const agree = document.getElementById('agree');

    const errorMsg = document.querySelector('.error-message');
    const successMsg = document.querySelector('.success-message');

    submit.addEventListener('click', (e) => {
        const emailCheck = email.value.includes('@');
        if(!emailCheck){
            e.preventDefault();
            errorMsg.textContent = 'Email musi posiadać znak @';
            return;
        }

        const nameCheck = name.value.length > 6;
        if(!nameCheck){
            e.preventDefault();
            errorMsg.textContent = 'Twoje imię jest za krótkie';
            return;
        }

        const surnameCheck = surname.value.length > 6;
        if(!surnameCheck){
            e.preventDefault();
            errorMsg.textContent = 'Twoje nazwisko jest za krótkie';
            return;
        }

        const passCheck = pass1.value === pass2.value && pass1.value.length > 0 && pass2.value.length > 0;
        if(!passCheck){
            e.preventDefault();
            errorMsg.textContent = 'Hasła nie są takie same lub puste';
            return;
        }

        const agreeCheck = agree.checked;
        if(!agreeCheck){
            e.preventDefault();
            errorMsg.textContent = 'Musisz zaakceptować warunki';
            return;
        }
    })
})