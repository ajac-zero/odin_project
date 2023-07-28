const sketchpad = document.querySelector('#sketchpad');
const colorpicker = document.querySelector('#colorpicker');
const sizepicker = document.querySelector('#sizepicker');
const confirmbutton = document.querySelector('#confirmbutton');

// Default values
let pickedColor = colorpicker.value;
let sketchpadSize = 16;

// Change color
function pickColor() {
    colorpicker.addEventListener('input', () => {
        pickedColor = colorpicker.value;
        console.log(pickedColor)
    })
}

// Change sketchpad size
function pickSize() {
    sizepicker.addEventListener('input', () => {
        sketchpadSize = sizepicker.value
        console.log(sketchpadSize)
    })
}

function changeSize() {
    confirmbutton.addEventListener('click', () => {
        clearSketchpad();
        createRows(sketchpadSize);
        createColumns(sketchpadSize);
    })
}

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

// Color sketchpad tiles
function makeColorable() {
    let columns = document.querySelectorAll('div.column');
    columns.forEach((column) => {
        column.addEventListener('mousedown', () => {
            addColorTile(columns);
        })
    })
    console.log(columns)
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


// Runtime
pickColor()
pickSize()
createRows(16)
createColumns(16)
makeColorable()
changeSize()