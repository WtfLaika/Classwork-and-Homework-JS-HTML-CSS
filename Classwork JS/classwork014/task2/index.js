/*
Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь.
 Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().
*/

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myMethod = function (userNumb) {
    for(let i = 0; i < this.length;i++){
        this[i] *= userNumb;
    }
    return this
}
alert(myArray.myMethod(2));