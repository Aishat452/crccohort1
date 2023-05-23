//Adding Functionalities
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let operand1 = null;
let operator = null;
let operand2 = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            display.textContent = '';
            operand1 = null;
            operator = null;
            operand2 = null;
        } else if (button.classList.contains('equals')) {
            operand2 = parseFloat(display.textContent);
            if (operator === '+') {
                const result = operand1 + operand2;
                display.textContent = result.toString();
                operand1 = result;
                operator = null;
                operand2 = null;
            } else if (operator === '-') {
                const result = operand1 - operand2;
                display.textContent = result.toString();
                operand1 = result;
                operator = null;
                operand2 = null;
            } else if (operator === '*') {
                const result = operand1 * operand2;
                display.textContent = result.toString();
                operand1 = result;
                operator = null;
                operand2 = null;
            } else if (operator === '/') {
                const result = operand1 / operand2;
                display.textContent = result.toString();
                operand1 = result;
                operator = null;
                operand2 = null;
            }
        } else if (button.classList.contains('number')) {
            if (display.textContent === '0' || operator === null) {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        } else if (button.classList.contains('operator')) {
            operand1 = parseFloat(display.textContent);
            operator = button.textContent;
            display.textContent = '';
        }
    });
});
