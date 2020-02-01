document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('invoice');
    const invoiceData = document.getElementById('invoiceData');
    invoiceData.style.display = checkbox.checked ? 'block' : 'none';
    
    checkbox.addEventListener('click', () => {
        invoiceData.style.display = checkbox.checked ? 'block' : 'none';
    })
})