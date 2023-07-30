// Default values
let currentNumber = '';
let pastNumber = '';
let currentOperator = '';
let displayValue = '';

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

const screenTop = document.querySelector('#Screen > .screenTop');
const screenBottom = document.querySelector('#Screen > .screenBottom');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const enterButton = document.querySelector('#enterButton');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', createNumber);
});

function createNumber (e) {
    currentNumber += e.target.dataset.number;
    displayValue = currentNumber;
    screenBottom.innerText = displayValue;
}

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', loadNumber);
});

function loadNumber(e) {
    currentOperator = e.target.dataset.operator;
    displayValue += e.target.dataset.operator;
    pastNumber = currentNumber;
    currentNumber = '';
    screenTop.innerText = displayValue;
    screenBottom.innerText = '0';
}

enterButton.addEventListener('click', () => {
    let result = operate(currentNumber, pastNumber, currentOperator);
    displayValue += currentNumber;
    screenTop.innerText = displayValue;
    screenBottom.innerText = result;
});

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearCalculator)

function clearCalculator() {
    currentNumber = '';
    pastNumber = '';
    currentOperator = '';
    displayValue = '';
    screenTop.innerText = displayValue;
    screenBottom.innerText = displayValue;
}