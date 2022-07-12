let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let value = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            value += buttonText;
            screen.value = value;
        }
        else if (buttonText == 'C') {
            value = "";
            screen.value = value;
        }
        else if (buttonText == '=') {
            screen.value = eval(value);
        }
        else {
            value += buttonText;
            screen.value = value;
        }

    })
}

