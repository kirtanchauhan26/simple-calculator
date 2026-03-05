let resultDisplay = document.getElementById('result');

function appendToResult(value) {
    resultDisplay.value += value;
}

function clearResult() {
    resultDisplay.value = '';
}

function calculateResult() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
        setTimeout(() => {
            clearResult();
        }, 1500);
    }
}