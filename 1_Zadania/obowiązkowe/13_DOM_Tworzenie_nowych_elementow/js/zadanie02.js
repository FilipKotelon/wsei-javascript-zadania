document.addEventListener('DOMContentLoaded', () => {
    const orders = document.getElementById('orders');
    const button = document.getElementById('addBtn');

    const orderId = document.getElementById('orderId');
    const item = document.getElementById('item');
    const quantity = document.getElementById('quantity');

    const getNewCell = (value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        return cell;
    }

    button.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        const idCell = getNewCell(orderId.value);
        const itemCell = getNewCell(item.value);
        const quantityCell = getNewCell(quantity.value);

        newRow.appendChild(idCell);
        newRow.appendChild(itemCell);
        newRow.appendChild(quantityCell);

        orders.appendChild(newRow);
    })
})