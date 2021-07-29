/*Задание 1 Разработайте страницу «текстовый редактор». На странице должно быть размешено поле ввода и кнопка «Сохранить»
 (фактического сохранения данных из поля ввода делать не надо). Если пользователь пытается закрыть окно браузера не «сохранив» данные в поле ввода,
  должно запускаться окно, которое потребует подтверждения операции закрытия окна. 

 */

let isSaved = false;

window.addEventListener('load', loading, false);


function loading() {
    saving.addEventListener('click', save, true);
    window.addEventListener('beforeunload', close, true)
}


function save() {
    isSaved = true;
}

function close(e) {
    if(!isSaved){

    
      var dialogText = 'Несохраненные данные будут удалены, хотите выйти?';
      e.returnValue = dialogText;
      return dialogText;
    }
}

// Данный скрипт работает только в отладчике и интернет експлорере, так как другие браузеры блочать данный ивент.