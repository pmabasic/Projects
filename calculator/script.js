const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const upperDisplay = document.getElementById('upperDisplay');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear') {
            upperDisplay.innerText = '';
            display.innerText = '';
        }   else if(item.id == 'backspace') {
            let string = upperDisplay.innerText.toString();
            upperDisplay.innerText = string.substr(0, string.length - 1);
        }   else if (upperDisplay.innerText != '' && item.id == 'equal') {
            display.innerText = eval(upperDisplay.innerText);
            upperDisplay.innerText = '';
            setTimeout(() => {
                display.innerText = '';
            }, 2000);
        }   else if(upperDisplay.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!!';
            setTimeout(() => {
                display.innerText = '';
            }, 3000);
        }   else {
            upperDisplay.innerText += item.id;
        }
    }
})