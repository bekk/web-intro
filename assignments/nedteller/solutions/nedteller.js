const buttonsContainer = document.querySelector('.buttons');
const output = document.querySelector('#output');
const start = document.querySelector('#start');

function buttonsClickHandler(event) {
    const element = event.target;

    if (element.nodeName !== 'BUTTON') {
        return;
    }

    const number = element.textContent;
    const currentNumber = output.textContent;

    output.textContent =
        currentNumber === '0' ? number : currentNumber + number;
}

function startClickHandler() {
    const interval = setInterval(() => {
        const currentNumber = output.textContent;

        if (currentNumber === '0') {
            clearInterval(interval);
            return;
        }

        output.textContent = Number(currentNumber) - 1;
    }, 100);
}

buttonsContainer.addEventListener('click', buttonsClickHandler);
start.addEventListener('click', startClickHandler);
