// Select DOM nodes
const sketchpad = document.querySelector('#sketchpad');
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const confirmButton = document.querySelector('#confirmButton');
const clearButton = document.querySelector('#clearButton');

// Default values
let pickedColor = colorPicker.value;
let sketchpadSize = sizePicker.value;

// Change color
colorPicker.addEventListener('input', () => {
    pickedColor = colorPicker.value;
});

// Change sketchpad size
sizePicker.addEventListener('input', () => {
        sketchpadSize = sizePicker.value
});


confirmButton.addEventListener('click', () => {
    createSketchpad(sketchpadSize);
})


// Create sketchpad
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

function createSketchpad(size) {
    clearSketchpad();
    createRows(size);
    createColumns(size);
    makeColorable();
}

// Color sketchpad tiles
function makeColorable() {
    let columns = document.querySelectorAll('div.column');
    columns.forEach((column) => {
        column.addEventListener('mousedown', () => {
            addColorTile(columns);
        })
        column.addEventListener('click', colorTile);
    })
}

function addColorTile(columns) {
    columns.forEach((column) => {
        column.addEventListener('mousemove', colorTile)
        column.addEventListener('mouseup', () => {
            removeColorTile(columns);
        })
    })
}

function removeColorTile(columns) {
    columns.forEach((column) => {
        column.removeEventListener('mousemove', colorTile)
    })
}

function colorTile(event) {
    event.target.style.background = pickedColor;
}

// Clear sketchpad
function clearSketchpad() {
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.lastChild);
    } ;
}

clearButton.addEventListener('click', () => {
    createSketchpad(sketchpadSize)
});


// Start!
createSketchpad(sketchpadSize);
