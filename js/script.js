document.addEventListener("DOMContentLoaded", function() {
    
    const display = document.getElementById('display');
    const acBtn = document.getElementById('acBtn');
    const numBtns = document.querySelectorAll('.num');
    const oprBtns = document.querySelectorAll('.opr');
    const equalBtn = document.getElementById('equal');

    function clearDisplay() {
        display.textContent = '';
    }

    function calculate() {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    }

    numBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            display.textContent += button.textContent;
        });
    });

    oprBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            display.textContent += button.textContent;
        });
    });

    acBtn.addEventListener('click', clearDisplay);

    equalBtn.addEventListener('click', calculate);
});