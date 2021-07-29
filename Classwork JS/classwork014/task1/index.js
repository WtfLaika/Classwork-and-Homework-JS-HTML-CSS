// Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст

// Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию, которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.

// Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.

// Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.

// Выведите информацию с объекта userTwo используя метод объекта userOne.

// Работа с контекстом(bind call apply) bind call apply


// Функция которая выводит контекст(в данном случае window)
$(user = () => {
    console.log(this);
})
user();
let userOne = {
    firstName: 'Petro',
    lastName: 'Ivanov',
    age: 22,
    showName() {
        alert(`Привет! Я ${this.firstName} ${this.lastName} `)
    }
}
// обычный вызов метода с стандартным с this
userOne.showName();

// замена this на window
let global = userOne.showName.bind(window);
global();

let userTwo = {
    firstName : 'Vasya',
    lastName : 'Detrov',
    age: 25

}
// Вызов информации с объекста userTwo через метод userOne(сбособ 1)
 userOne.showName.call(userTwo);
// Вызов информации с объекста userTwo через метод userOne(сбособ 2). 
 userOne.showName.apply(userTwo);


 //Разница между apply и call небольшая, call берет агрументы функции как они есть, а apply помещает их в псевдомассив