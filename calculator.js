var display = document.getElementById('display');


document.getElementById('plus').addEventListener('click', () => buttonClick('+'));
document.getElementById('minus').addEventListener('click', () => buttonClick('-'));
document.getElementById('multiply').addEventListener('click', () => buttonClick('*'));
document.getElementById('divide').addEventListener('click', () => buttonClick('/'));
document.getElementById('seven').addEventListener('click', () => buttonClick('7'));
document.getElementById('eight').addEventListener('click', () => buttonClick('8'));
document.getElementById('nine').addEventListener('click', () => buttonClick('9'));
document.getElementById('four').addEventListener('click', () => buttonClick('4'));
document.getElementById('five').addEventListener('click', () => buttonClick('5'));
document.getElementById('six').addEventListener('click', () => buttonClick('6'));
document.getElementById('one').addEventListener('click', () => buttonClick('1'));
document.getElementById('two').addEventListener('click', () => buttonClick('2'));
document.getElementById('three').addEventListener('click', () => buttonClick('3'));
document.getElementById('zero').addEventListener('click', () => buttonClick('0'));
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clearDisplay);

function buttonClick(value) {
    switch (value) {
        case '=':
            calculate();
            break;
        case 'C':
            clearDisplay();
            break;
        default:
            append(value);
            break;
    }
}

function append(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'try again';
    }
}

function clearDisplay() {
    display.value = '';
}
