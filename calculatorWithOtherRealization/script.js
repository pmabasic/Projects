const button = document.getElementById('button');
const result = document.getElementById('result');
const select = document.getElementById('select');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

button.addEventListener('click', function() {
    if(select.value == '-') {
        result.innerText = eval(text1.value * 1 - text2.value * 1);
    }   else if(select.value == '+') {
        result.innerText = eval((text1.value * 1) + (text2.value * 1));
    }   else if(select.value == '*') {
        result.innerText = eval((text1.value * 1) * (text2.value * 1));
    }   else  {
        result.innerText = eval((text1.value * 1) / (text2.value * 1));
    }
})