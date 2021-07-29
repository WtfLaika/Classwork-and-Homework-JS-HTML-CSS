// // Создайте две целочисленные переменные и присвойте им некоторые значения.
// По этим значениям, используя вложенные циклы, нарисуйте заполненный прямоугольник из звездочек.
// // Напишите код, который будет спрашивать логин(prompt).Если посетитель вводит «Админ»,
//  то спрашивать пароль, если нажал отмена(escape) – выводить «Вход отменён».
//  Пароль проверять так.Если введён пароль «Властелин», то выводить «Добро пожаловать!»,
//   иначе – «Пароль неверен», при отмене – «Вход отменён».

let counterLog=3;
let counterPass=3;
checkUser(counterLog);
function checkUser(counterLog) {
    const login = prompt('Введите ваш логин', 'Example');
    if (login == 'Админ') {
        checkPass(counterPass);
        function checkPass(counterPass) {
        const pass = prompt('Ваш ваш пароль', 'Example');
            if (pass == 'Властелин') {
                alert("Добро пожаловать");
            }
            else if (pass === null) {
                alert('Вход отменен');
            }
            else {
                if(counterPass > 0){
                alert('Пароль неверен Осталось ' + counterPass + " попытки");
                return checkPass(counterPass - 1);
                }
                else{
                    alert('Вход заблокирован');
                }
            }
        }
    }
    else if (login === null) {
        alert('Вход отменен');
    }
    else {
        if(counterLog > 0){
        alert('Логин неверен Осталось ' + counterLog +" попытки");
        return checkUser(counterLog-1);
        }
        else{
            alert('Вход заблокирован');
        }
    }
}