/*Задание 4 Разработайте страницу, которая будет выводить сообщение «сохранено» при нажатии на клавиши Ctr1 + S,
 «выбрано все» при нажатии на Ctr1 + А и «сохранено все» при нажатии на комбинацию Ctr1 + Shift + S. 
 */


//Данное событие можно не добавлять здесь, но если ещё не прогрузилась, то js код будет уже работать, а так лучше не делать
window.addEventListener('load', loading, false)


function loading() {
    window.addEventListener('keydown', takeInf, true);
}


function takeInf(e) {
    e.preventDefault();
    if (e.code == 'KeyS' && e.ctrlKey && e.shiftKey) {
       return  alert('Сохранено все')
    }
    else if (e.code == 'KeyA' && e.ctrlKey) {
        return alert('Выбрано все');
    }
    else if (e.code == 'KeyS' && e.ctrlKey) {
        
       return alert('Сохранено');
    }

}