const button = document.getElementById('button');
const text = document.getElementById('text');
const container = document.getElementById('container');

// * Кастомная отладка для async await

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

button.addEventListener('click', function() {
    zxc();
})

async function zxc() {
    let num = 1000;
    while(num > 0) {
        await delay (50);
        num = num - 7;
        text.innerText = num;
        await delay (100)
        container.style.backgroundImage = `url(${randNum()}.jpg)`;
    }
}

function randNum () {
    return Math.floor(Math.random() * 5);
}
container.style.backgroundImage = `url(1.jpg)`;

// * Функция по рандомизации числа которая возращает рандомное число и передаст его в название картинки.

// TODO: Уменьшаем 1000 до 0, меняет рандомно картинку на фоне + фигачим фон на задний фон, сделать попап перед этим LET ME die / life;