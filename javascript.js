const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const decimalButton = document.querySelector('.decimal');


let num1 = 0;

let operator = '';

let num2 = 0;

let displayNum = '9999999';
let newNum = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {    
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function updateDisplayNum(displayNum) {
    display.textContent += displayNum;
}

function clearDisplay() {
    display.textContent = '';
    num1 = 0;
    operator = '';  
    num2 = 0;
    
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        newNum += button.textContent;
        updateDisplayNum(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplayNum(button.textContent);
        if (newNum) {
            num1 = newNum;
            newNum = '';
        }
        operator = button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    if (newNum) {
        num2 = newNum;
        newNum = '';
    }
    let result = operate(operator, Number(num1), Number(num2));
    clearDisplay();
    updateDisplayNum(result);
    num1 = result;
    num2 = '';
});