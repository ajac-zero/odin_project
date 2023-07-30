// Default values
let currentNumber = '';
let pastNumber = '';
let currentOperator = '';
let result = '';

// Operations
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b != 0) {
        return (a / b)
    } else {
        return "Can't Do!"
    }
};

function operate(firstNumber, secondNumber, operator) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return sub(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

// Element wiring
const screenTop = document.querySelector('#Screen > .screenTop');
const screenBottom = document.querySelector('#Screen > .screenBottom');
const numberButtons = document.querySelectorAll('.Button.Number');
const operatorButtons = document.querySelectorAll('.Button.Operator');
const enterButton = document.querySelector('#enterButton');
const clearButton = document.querySelector('#clearButton');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', createNumber);
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        startOperation();
    });
});

enterButton.addEventListener('click', () => {
    result = operate(pastNumber, currentNumber, currentOperator);
    endOperation();
});

// Functions
clearButton.addEventListener('click', clearCalculator)

function createNumber(e) {
    currentNumber += e.target.dataset.key;
    screenBottom.innerText = currentNumber;
}

function startOperation(e) {
    currentOperator = e.target.dataset.key;
    pastNumber = currentNumber;
    screenTop.innerText += pastNumber;
    screenTop.innerText += e.target.dataset.key;
    currentNumber = '';
    screenBottom.innerText = '0';
}

function endOperation() {
    screenTop.innerText = '';
    screenBottom.innerText = result;
    currentNumber = result;
}

function clearCalculator() {
    currentNumber = '';
    pastNumber = '';
    currentOperator = '';
    result = '';
    screenTop.innerText = '';
    screenBottom.innerText = '';
}