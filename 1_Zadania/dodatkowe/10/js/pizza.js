document.addEventListener('DOMContentLoaded', () => {
    let totalPrice = 0;
    const ingredientCheckboxes = [... document.querySelectorAll('input[type="checkbox"][data-price]')];
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    const checkAll = allCheckboxes[0];
    const uncheckAll = allCheckboxes[allCheckboxes.length - 1];

    const priceElement = document.getElementById('price');
    const pageInfo = document.getElementById('page-info');

    const submit = document.querySelector('form button');

    const updatePrice = () => {
        //Cena pokazuje -0.00 zł przez floata
        const priceStr = totalPrice <= 0 ? Math.abs(totalPrice.toFixed(2)) : totalPrice.toFixed(2);

        priceElement.textContent = priceStr + ' zł';
    }

    ingredientCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function(){
            if(this.checked){
                totalPrice += parseFloat(this.dataset.price);
            } else {
                totalPrice -= parseFloat(this.dataset.price);
            }
            updatePrice();
        })
    })

    checkAll.addEventListener('click', function(){
        if(this.checked){
            ingredientCheckboxes.forEach(checkbox => {
                if(checkbox.checked === false){
                    checkbox.click();
                }
            });
        }
    })

    uncheckAll.addEventListener('click', function(){
        if(this.checked){
            allCheckboxes.forEach(checkbox => {
                if(checkbox.checked === true && checkbox !== this){
                    checkbox.click();
                }
            });
        }
    })

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const priceStr = totalPrice <= 0 ? Math.abs(totalPrice.toFixed(2)) : totalPrice.toFixed(2);
        pageInfo.textContent = "Do zapłaty: " + priceStr + ' zł';
    })
})