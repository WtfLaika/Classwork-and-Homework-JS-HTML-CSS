/* 
Добавить на сайт по заказу пиццы слайдер состоящий их 3-х картинок, которые находятся в папке img.
Слайдер должен переключать картинки каждые 15сек. Также пользователь нажатием по стрелочке в лево и
право может переключать слайды. Реализовать слайдер используя jQuery.
*/
const numbPatt = /\+380\d{9}$/g;
const emailPatt = /\b[a-zA-Z._1-9]+@[a-zA-Z0-9-]+\.[a-z]{2,4}\b/;
const namePatt = /[а-яА-Яa-zA-Z]+/g;
let leftButIsReady = true;
let rightButIsReady = true;
$(document).ready(function () {

    // Ивент нажатия левой и правой кнопки слайдера
    $('#btn_left').click(slideLeft);
    $('#btn_right').click(slideRight);
    // Таймер рекламы
    let timer = setInterval( slideRight,15000);
    // Добавления ивентов drag&drop
    const dragItems = document.querySelectorAll('img');
    dragItems.forEach((item) => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', startDrag, 'false')

    })
    pizza_constructor.addEventListener('dragover', endDrag, 'true');
    pizza_constructor.addEventListener('drop', drop, 'false');

    size_big.title = 80;
    small.title = 50;
    chedder.title = 15;
    mozarella.title = 10;
    chicken.title = 20;
    bacon.title = 30;
    corn.title = 10;
    onion.title = 5;
    alfredo.title = 20;
    barbeque.title = 23;
    garlic.title = 25;


    // Валидация инпутов
    const userInf = document.myform;
    for (let i = 0; i < userInf.length; i++) {
        userInf[i].addEventListener('blur', checkPattern, true);
        userInf[i].isValid = false;
    }

    //Проверка перед отправкой данных
    sender.addEventListener('click', validateForm, true);

    advertisement.addEventListener('mouseover', runAdver, false)
})

//Функция левой кнопки слайдера
function slideLeft(e) {

    let currentPos = $("#slider-track").css('left').replace('px', '');
    let newPos = (Number(currentPos) + 400) + 'px';
    if (currentPos < -200 && leftButIsReady) {
        leftButIsReady = false;
        $("#slider-track").animate({ left: `${newPos}` }, 2000, () => { leftButIsReady = true });

    }
    else if (currentPos > - 200 && leftButIsReady) {
        leftButIsReady = false;
        $("#slider-track").animate({ left: `-800px` }, 2000, () => { leftButIsReady = true });
    }
}
//Функция правой кнопки слайдера
function slideRight(e) {
    let currentPos = $("#slider-track").css('left').replace('px', '');
    let newPos = (Number(currentPos) - 400) + 'px';
    if (currentPos > -600 && rightButIsReady) {
        rightButIsReady = false;
        $('#slider-track').animate({ left: `${newPos}` }, 2000, () => { rightButIsReady = true });
    }
    else if (currentPos < -600 && rightButIsReady) {
        rightButIsReady = false;
        $('#slider-track').animate({ left: `0px` }, 2000, () => { rightButIsReady = true });
    }
}

//Функция рекламы
function runAdver() {
    this.style.left = getRandom(0, 1500) + 'px';
    this.style.top = getRandom(0, 1500) + 'px';
}
//Рандомайзер
function getRandom(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
//Функция начала drag
function startDrag(e) {
    e.dataTransfer.setData("id", e.target.id);
    e.dataTransfer.dropEffect = 'copy';
}
// функция перемещения
function endDrag(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}
// Функция дропа элемента
function drop(e) {
    e.preventDefault();
    let itemId = e.dataTransfer.getData('id')
    const elem = document.getElementById(itemId).cloneNode(true);
    if (document.querySelector(` #pizza_constructor #${itemId}`)) {
        return alert('нельзя добавлять 2 однаковых компонента в пиццу');
    } else if ((itemId == 'size_big' || itemId == 'small') && (document.querySelector(` #pizza_constructor #size_big`) || document.querySelector(` #pizza_constructor #small`))) {
        return alert("Можно выбрать только один  размер пиццы");
    }
    let div = document.createElement('div');
    // Добавления кнопки удаления элемента
    const deleteBut = document.createElement('input');
    deleteBut.setAttribute('type', 'button');
    if (itemId == 'size_big') {
        deleteBut.style.left = '-8px'
        deleteBut.style.top = '-79px'
    }
    else {
        deleteBut.style.left = '2px'
        deleteBut.style.top = '-60px'
    }
    deleteBut.style.position = 'relative';
    deleteBut.value = 'x'
    div.className = `${itemId}`
    deleteBut.className = `${itemId}`;
    div.append(elem);
    div.append(deleteBut);
    deleteBut.addEventListener('click', deleteElem, 'false');
    e.target.append(div);
    calculatePrice();

}
// Функция удаления элемента
function deleteElem(e) {
    const clas = e.target.getAttribute('class');
    const div = document.querySelector(`.${clas}`);
    div.remove();
    calculatePrice();
}
// Расчёт цены пиццы
function calculatePrice() {
    let imgs = document.querySelectorAll('#pizza_constructor img');
    let sum = 0;
    imgs.forEach((item) => {
        sum += Number(item.title);
    })
    price.value = `${sum}грн`;
}

// Проверка пользовательских данных
function checkPattern(e) {
    let value = this.value
    const id = this.getAttribute('id');
    let patt;
    if (id == 'number') {
        patt = numbPatt;
    }
    else if (id == 'mail') {
        patt = emailPatt;
    }
    else if (id == 'firstName' || id == 'lastName') {
        patt = namePatt;
    }


    if (patt.test(value)) {
        this.isValid = true;
        document.querySelector(`#error_${id}`).style.opacity = '0';
    }
    else {
        this.isValid = false;
        document.querySelector(`#error_${id}`).style.opacity = '1';
    }
}

function validateForm(e) {
    let isValid = true;
    const form = document.myform;
    for (let i = 0; i < form.length; i++) {
        if (form[i] == sender || form[i] == price) {
            continue
        }
        if (form[i].isValid == false) {
            const id = form[i].getAttribute('id');
            document.querySelector(`#error_${id}`).style.opacity = '1';
            isValid = false;
        }
    }
    if (!isValid) {
        e.preventDefault();
        alert('Проверьте правильность введенных данных')
    }
}