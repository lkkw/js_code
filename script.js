// script.js
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetScreen = false;

const displayElement = document.getElementById('display');

function updateDisplay() {
    // 自动根据字数调整字号（防止溢出）
    if (currentInput.length > 6) {
        displayElement.style.fontSize = '50px';
    } else {
        displayElement.style.fontSize = '80px';
    }
    displayElement.innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) calculate();
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function calculate() {
    if (operator === null || shouldResetScreen) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return;
    }

    currentInput = result.toString();
    operator = null;
    shouldResetScreen = true;
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

console.log(this);
