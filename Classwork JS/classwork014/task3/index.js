/*
Сделайте функцию, которая считает и выводит количество своих вызовов.
                    func(); //выведет 1
                    func(); //выведет 2
                    func(); //выведет 3
                    func(); //выведет 4 
*/


function myFunc(){
    let counter = 1;
    return function(){
        return alert(counter++);
    }
}

let func = myFunc();

