/*
## Задание 

Реализовать слайдер на чистом Javascript.

#### Технические требования:
- Создать HTML разметку, содержащую кнопки `Previous`, `Next`, и картинки (6 штук), которые будут пролистываться горизонтально. 
- На странице должна быть видна только одна картинка. Слева от нее будет кнопка `Previous`, справа - `Next`.
- По нажатию на кнопку `Next` - должна появиться новая картинка, следующая из списка.
- По нажатию на кнопку `Previous` - должна появиться предыдущая картинка.
- Слайдер должен быть бесконечным, т.е. если в начале нажать на кнопку `Previous`, то покажется последняя картинка, а если нажать на `Next`, когда видимая - последняя картинка, то будет видна первая картинка.
- Пример работы слайдера можно увидеть(http://kenwheeler.github.io/slick/) (первый пример).
 */
const deletePx = /px$/g;
window.addEventListener('load', loading, false)

function loading() {
    let btnPrev = previous;
    let btnNext = next;
    btnPrev.addEventListener('click', choosePrev, true)
    btnNext.addEventListener('click', chooseNext, false)
}

function chooseNext() {
    let sliderStyle = getComputedStyle( document.querySelector('.slider-track') );
    let position = sliderStyle.left.replace(deletePx,'');
    if(position > -400 && position % 100 == 0){
        document.querySelector('.slider-track').style.left = (Number(position) - 200) + 'px'; 
    }
    else if (position <= -400){
        document.querySelector('.slider-track').style.left = '500px'
    }
    
}

function choosePrev() {
    let sliderStyle = getComputedStyle( document.querySelector('.slider-track') );
    let position = sliderStyle.left.replace(deletePx,'');
    

    if(position < 400 && position % 100 == 0){
        document.querySelector('.slider-track').style.left = (Number(position) + 200) + 'px'; 
    }
    else if(position >= 400){
        document.querySelector('.slider-track').style.left = '-500px'
    }
}