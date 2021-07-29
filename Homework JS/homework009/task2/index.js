/*Задание 2 Создайте страницу с несколькими блоками текста. Реализуйте обработчики событий таким образом, чтобы при нажатии на кнопку г - текст становился красного цвета, 
кнопка g сделает цвет текста зеленым, а b-СИНИМ. 
*/

 window.addEventListener('load',loading,false);

 function loading(){
     red_btn.addEventListener('click',addRed,true);
     green_btn.addEventListener('click',addGreen,false);
     blue_btn.addEventListener('click',addBlue,true);
 }

 function addRed(){
     user_text.style.color = 'red';
 }

 function addGreen(){
     user_text.style.color = 'green';
 }

 function addBlue(){
     user_text.style.color = 'blue';
 }