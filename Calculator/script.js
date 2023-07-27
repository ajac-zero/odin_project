const sketchpad = document.querySelector('#sketchpad');
const colorpicker = document.querySelector('#colorpicker');

let pickedColor = colorpicker.value;

function createRows(rows) {
    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row);
    }
}

function createColumns(columns) {
    const rows = document.querySelectorAll('#sketchpad > .row');
    rows.forEach((row) => {
        for (let i = 1; i <= columns; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);            
        }
    });
}

function makeColorable() {
    let columns = document.querySelectorAll('div.column');
    columns.forEach((column) => {
        column.addEventListener('mousedown', (e) => {
            e.target.style.background = pickedColor;
            console.log(e.target)
        })
    })
    console.log(columns)
}

createRows(16)
createColumns(16)
makeColorable()