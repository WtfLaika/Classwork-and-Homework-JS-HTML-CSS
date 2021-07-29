/* Используя циклы нарисуйте  в браузере с помощью
пробелов () и звездочек ($): * Прямоугольник. * Прямоугольный треугольник *
равносторонний треугольник. * Ромб
 */

// Прямоугольник
const checkRect = confirm('Вывести прямоугольник?');

if (checkRect) {

for(let i = 0; i < 50; i++){

    for(let j = 0; j < 35; j++){
        document.write("$");
    }

    document.write("<br/>");
}

}


const checkRightTri = confirm('Вывести прямоугольный треугольник?');


if  (checkRightTri) {

    for(let i = 0; i < 50; i++){

        for(let j = 0; j <= i; j++){
            document.write('$');
        }
        document.write('<br/>');
    }
}


const checkEquilTri = confirm('Вывести равносторонний треугольник?');

if (checkEquilTri) {

   

    for(let i = 1; i < 100; i += 2) {
        let space = "";
        let symbol = "";
        for(let j = 100 - i; j > 0; j--){
            space += "&nbsp;";
        }
        for(let k = 0; k < i; k++){
            symbol += '$';
        }
        document.write(space + symbol + "<br/>");
    }
}


const checkRhomb = confirm('Вывести ромб?');

if (checkRhomb) {

    for(let i = 1; i < 100; i += 2) {
        let space = "";
        let symbol = "";
        if(i <= 50){
            for(let j = 50 - i; j > 0; j--){
                space += "&nbsp;";
            }
            for(let k = 0; k < i; k++){
                symbol += '$';
            }
        }
        else {
            for(let j = 100 - i; j > 0; j--){
                symbol += "$";
            }
            for(let k = 50; k < i; k++){
                
                space += "&nbsp;";
        }
    }
    document.write(space + symbol + "<br/>")
}
}