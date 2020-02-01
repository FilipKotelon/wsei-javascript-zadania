document.addEventListener('DOMContentLoaded', () => {
    const cardNumber = document.getElementById('name');
    const cardType = document.getElementById('type');
    let curType = '?';

    cardNumber.addEventListener('input', () => {
        if(cardNumber.value.startsWith('4')){
            cardType.textContent = 'Visa';
            curType = 'visa';
        } else if(cardNumber.value.startsWith('5')){
            cardType.textContent = 'Mastercard';
            curType = 'mc';
        } else if(cardNumber.value.startsWith('34') || cardNumber.value.startsWith('37')){
            cardType.textContent = 'American Express';
            curType = 'ae';
        } else {
            cardType.textContent = '?';
            curType = '?';
        }

        if(curType === 'visa' && cardNumber.value.length >= 13 && cardNumber.value.length <= 16){
            cardNumber.style.borderColor = 'green';
        } else if(curType === 'mc' && cardNumber.value.length == 16){
            cardNumber.style.borderColor = 'green';
        } else if(curType === 'ae' && cardNumber.value.length == 15){
            cardNumber.style.borderColor = 'green';
        } else {
            cardNumber.style.borderColor = '#ccc';
        }
    })
})