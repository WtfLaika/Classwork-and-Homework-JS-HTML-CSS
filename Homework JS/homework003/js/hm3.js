/* Создайте массив styles с элементами "Джаз" и "Блюз".
Добавьте "Рок-н-ролл" в конец.
Замените значение в середине на "Класcика". Ваш код для поиска значения
должен работать с любой длиной.
Удалите первый элемент массива и покажите его.
Вставте "Реп" и "Регги" в начало массива.  */


const styles = ["Джаз","Блюз"];

styles.push('Рок-н-ролл');
styles.splice(styles.length/2,1,"Классика");
const firstLett = styles.shift();
styles.unshift("Реп","Регги");