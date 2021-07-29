/*
Задание 3 Сделайте кнопку с надписью «получить скидку». При наведение кнопка должна «убегать» от курсора не давая пользователю нажать себя. 
 */


window.addEventListener('load', loading, false);

function loading() {
    container.addEventListener('mouseover', runForest, true);
}


//1 способ
function runForest(e) {
    let x = e.clientX;
    let y = e.clientY;
    let displacementX = 0;
    let displacementY = 0;
    if (x > 1000) {
        displacementX = -900;
    }
    else if (x < 100) {
        displacementX = 20;
    }
    if (y > 500) {
        displacementY = -400;
    }
    else if (y < 100) {
        displacementY = 20;
    }


    container.style.left = Number(x + displacementX) + 'px';
    container.style.top = Number(y + displacementY) + 'px'
}


//2 способ

/*
function runForest(e){
    let x = e.clientX;
    let y = e.clientY;
    container.style.left = Number(randomize(0,1500)) + 'px';
    container.style.top = Number(randomize(0,1500)) + 'px';

}

function randomize(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
 */