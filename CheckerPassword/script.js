const button = document.getElementById('btnStart');
const password = document.getElementById('password');
const result = document.getElementById('result');
const containerForToasts = document.getElementById('containerForToasts')
const resultTitle = document.getElementById('resultTitle');

let lowpas = 'jB1$ljmjckj';
let middlepas = 'Db1j4jkjppMA097';
let hardpas = 'Klo314On01*mnnn"jshch';

button.addEventListener('click', function() {
    if(password.value != '') {
        if(password.value.length < 8) {
            console.log('Пароль есть в базе брута, условно, 1000 обходов по базе бруда 10ms');
            result.innerHTML = `На взлом вашего пароля потребуется до 2 секунд, из-за того что он есть в базе брутфорс(4000итераций по базе - 100ms)`;
            resultTitle.classList.add('red');
            resultTitle.innerText = 'Очень Ненадёжный';
            password.value = '';
        }   else {
            let howMany = factorial(password.value.length) * 96 / 10000; 
            if(howMany > 86401 && howMany < 31536000) {
                result.innerHTML = `${Math.floor(howMany / 86400)} дней потребуется для взлома этого пароля.`; 
                resultTitle.innerText = 'Ненадёжный'
                resultTitle.classList.add('orange');
            }   else if (howMany < 84000 ) {
                result.innerHTML = `${Math.floor(howMany / 3600)} часа потребуется для взлома этого пароля`;
                resultTitle.classList.add('red');
                resultTitle.innerText = 'Очень ненадёжный'
            } else if (howMany > 31536000) {
                if(Math.floor(howMany / 31536000) == 1) {
                    result.innerHTML = `${Math.floor(howMany / 31536000)} год потребуется для взлома этого пароля`;
                    resultTitle.innerText = 'Надежный';
                    resultTitle.classList.add('green');    
                }   else {
                    result.innerHTML = `${Math.floor(howMany / 31536000)} лет потребуется для того чтобы взломать этот пароль`;
                    resultTitle.innerText = 'Надежный';
                    resultTitle.classList.add('green');    
                }
            }
        }
    }   else {
        toast();
    }
})

function factorial(n) {
    if(n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}

function toast() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = `Вы ничего не ввели`;
    containerForToasts.appendChild(toast);
    setInterval(() => {
        toast.remove();
    }, 3000);
}






// ? условная база брутфорса. 100 обходов - 10 ms.
// * У меня будет база в 80000 паролей.
// ? обход не по базе брутфорса. 1000 различных итераций - 10мс.
// * 26 A-Z 26 a-z 10 0-10 symbols = 33;
// TODO: Сделать слайдер с подсказками, возможно табличку скачать и вставить на сайт со средним временм взлома пароля,
// TODO: Сделать блок с информацией о том что все алгоритмы даже не близки к приблизительным
// ? 1) если пароль в базе брут форса(length < 10)