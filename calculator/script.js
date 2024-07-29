// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function append(character) {
    let display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;
    try {
         // Handle power (^) operator separately
       expression = expression.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
