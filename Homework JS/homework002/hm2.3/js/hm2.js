/* Дано два числа  А и В где (А '<' B). Выведите на экран суму всех чисел,
расположенных в числовом промежутке от А до В. Выведите на экран
все нечетные значение, расположенные в числовом промежутке от А до В. */

const a = 12;
const b = 24;
let sum = 0;
let oddNumb = "";


for(let i = a + 1; i < b; i++){

    sum += i;
    
    if ( i % 2 !== 0 ){
        oddNumb += i + " ";
    }

}

alert('Сумма всех числел в промежутке от ' + a + " до " + b + " : " + sum);
alert('Все нечетные значени в промежутке от ' + a + " до " + b + " : " + oddNumb);
