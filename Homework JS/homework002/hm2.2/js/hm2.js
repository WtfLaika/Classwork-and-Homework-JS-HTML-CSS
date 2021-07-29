// Перепишите if с помощью тернарного  оператора "?"
// if (a + b < 4){
// result = "Мало";
// else {
// result = "Много";
// }
const a = parseInt(prompt('Введите число','0'));
const b = parseInt(prompt('Введите число','0'));

let result = (a + b < 4) ? 'Мало' : 'Много'; /* Тернарный оператор '?' */

alert(result);


// Перепишите if...else с помощью  нескольких опрераторов "?"
/* var massage;

if login (login == "Вася");
    massage = "Привет" ;
}
else if (login == "Директор") {
    massage = "Здраствуйте";
}

else if (login == "") {
    massage = "Нет логина";
}
else {
    massage = "";
}

 */

const login = prompt('Введите имя',"");

let massage = (login == "Вася")? 'Привет' :
(login == "Директор")? "Здраствуйте":
(login == "")? "Нет логина":
"";

alert(massage);


