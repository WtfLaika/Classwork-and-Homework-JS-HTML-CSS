/*
## Задание

Нарисовать на странице круг используя параметры, которые введет пользователь.

#### Технические требования:
- При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг".
Данная кнопка должна являться единственным контентом в теле HTML документа,
весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
- При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга.
 При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета.
  При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться,
   то есть все остальные круги сдвигаются влево.
- У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения.
 Это неэффективно, так делать не нужно. На всю страницу должен быть только один обработчик событий, который будет это делать.
 */



window.addEventListener('load', loading, false);

function loading() {
   circleMaker.addEventListener('click', createCircles, true)
}

function createCircles() {

   const diam = prompt('Введите диамтр круга', "2");
   let div = document.createElement('div');
   div.className = 'container'
   document.body.append(div);
   div.style.display = 'flex';
   div.style.width = `${10 * (Number(diam) + 2)}px`;
   div.style.flexWrap = 'wrap';
   for (let i = 0; i < 100; i++) {

      let circle = document.createElement('div');
      circle.style.backgroundColor = 'green';
      circle.style.border = '1px solid green';
      circle.style.borderRadius = `${Number(diam)}px`;
      circle.style.height = `${diam}px`;
      circle.style.width = `${diam}px`;
      circle.className = 'circle'
      div.append(circle);

   }
   div.addEventListener('click', deleteCirc, false)
}


function deleteCirc(e) {
   if (e.target != document.querySelector('.container') ){
      e.target.style.opacity = '0';
      setTimeout( ()=> {
         e.target.remove();
      },1000)
      
   }
}

