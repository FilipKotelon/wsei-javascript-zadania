document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.table');

    const submit = document.querySelector('form button');
    const team1 = document.getElementById('team1');
    const points1 = document.getElementById('points1');
    const team2 = document.getElementById('team2');
    const points2 = document.getElementById('points2');

    const getNewCell = (value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        return cell;
    }

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if(team1.value !== team2.value && parseInt(points1.value) >= 0 && parseInt(points2.value) >= 0){
            const newRow = document.createElement('tr');

            const team1Cell = getNewCell(team1.value);
            const team2Cell = getNewCell(team2.value);
            const scoreCell = getNewCell(points1.value + ' - ' + points2.value);

            newRow.appendChild(team1Cell);
            newRow.appendChild(team2Cell);
            newRow.appendChild(scoreCell);

            table.firstElementChild.appendChild(newRow);
        }
    })
})