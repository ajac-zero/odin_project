const sketchpad = document.querySelector('#sketchpad');

const createRows = (rows) => {
    for (let i = 0; i <= rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row);
    }
}

let createColumns = (columns) => {
    const rows = document.querySelectorAll('#sketchpad > .row');
    rows.forEach((row) => {
        for (let i = 0; i <= columns; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.innerText = 'Yo!';
            row.appendChild(column);            
        }
    });
}

createRows(10)
createColumns(5)