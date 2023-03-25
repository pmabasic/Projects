// * Заносим переменные в константы
const buttonStart = document.getElementById('buttonStart');
const buttonEnd = document.getElementById('buttonEnd');
const containerForText = document.getElementById('containerForText');
const containerForToasts = document.getElementById('containerForToasts')

// * Что происходит когда мы кликаем на button start

// ? ToastStart();

function toastStart() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = `Старт вакханалии`;
    containerForToasts.appendChild(toast);
    setInterval(() => {
        toast.remove();
    }, 1000);
}

buttonStart.addEventListener('click', function() {
    toastStart();
    // * Устанавливаем интервал вызова функции по смене цвета BG
    setInterval(() => {
        randomBg();
    }, 300);
    setInterval(() => {
        Autowritter();
    }, 50);
    setInterval(() => {
        purpleHeartRain();
    }, 300);    

})

// * Функция отвечающая за постоянную смену цвета BG

function randomBg() {
    return document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;   
}

// ! Реализация падающих сердечек

function purpleHeartRain() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💜';
    document.body.appendChild(heart);
}

// ! Autowritter - Реализация текста который будет набираться сам и сопутствующие для этого переменные idx + text

let idx = 0; // ? idx для смены индекса в тексте
let text = 'I`m wanna be the most stronger programmer in the world!!!'; // ? сам текст который будет меняться;

function Autowritter() {
    containerForText.innerText = text.slice(0, idx);
    idx++;
    // ? 
    if(idx > text.length - 1) {
        idx = 0;
    }
}

// ? Контейнер блока с toast функциями
// TODO: При старте запускается 3 toast с отсчётом с 3 до 1 и потом происходит запуск функций. Попап - Закрытие 1.5 секунды toast + 0.5 секунды до закрытия.


function toastEnd() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = 'Сворачиваем функцию';
    containerForToasts.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 1500);
    
}

// * Что происходит когда мы кликаем на button end

buttonEnd.addEventListener('click', function() {
    toastEnd()
    setInterval(() => {
        location.reload();
    }, 2000);
    // toastEnd();

})

/* TODO:
    1)На открытии страницы реализовать какой-то звук и после того как звук закончить запускаем все функции. + toast через каждую секунду с уменьшующимся таймером(Вандализм произойдёт через 3, 2, 1) а затем звук; // ! не получилось, не хватило опыта
    3)Реализация purple heart rain // * +
    4)Реализация Autowritter text // * +
    5)Реализовать Popup на кнопке buttonEnd(Вы точно хотите прервать функцию || да or нет, если нет то просто закрываем popur, если да проигрывается звук, запускается toast notification, и страница закрывается после проигранного звука) // * В процессе
*/