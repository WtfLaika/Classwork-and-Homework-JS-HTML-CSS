/*
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, 
чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - 
в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

*/


function generateNums() {
    let previosNums = [];
    return function generate() {
        let newNum = Math.floor(Math.random() * (100 - 1) + 1);
        if (previosNums.indexOf(newNum) == -1) {
            previosNums.push(newNum);
            return alert(newNum);
        }
        else {
            generate();
        }
    }
}


let myFunc = generateNums();

myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();