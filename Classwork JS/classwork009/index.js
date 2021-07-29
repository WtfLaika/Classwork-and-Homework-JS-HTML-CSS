/*Разработайте программу секундомер. 
Секундомер должен иметь три кнопки Старт, Стоп, Сбросить 
Секундомер должен выводить время в формате 00:00:00 добавьте стили используя J5 
в  */
let startIsPressed = false;

window.onload = () => {


    let time = document.querySelector('.time');
    time.style.color = 'green';
    time.style.fontSize = '30px';
    time.style.fontWeight = 'bold';
    time.style.backgroundColor = 'orange';

    let startTimer, mySec, myMin, myMSec;
    let mseconds = 0;
    let seconds = 0;
    let minutes = 0;

    document.querySelector('.button1').onclick = () => {
        if (!startIsPressed) {
            startTimer = setInterval(showTime, 10);
            startIsPressed = true;
        }

        }

        function showTime() {
            mseconds++;

            if (minutes >= 60) {
                clearTimeout(startTimer);
            }

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            if (mseconds >= 60) {
                seconds++;
                mseconds = 0;
            }

            if (minutes < 10) {
                myMin = '0' + minutes;
            }
            else {
                myMin = minutes;
            }
            if (seconds < 10) {
                mySec = '0' + seconds;
            }
            else {
                mySec = seconds;
            }
            if (mseconds < 10) {
                myMSec = '0' + mseconds;
            }
            else {
                myMSec = mseconds;
            }



            document.querySelector('.time').innerHTML = myMin + ":" + mySec + ":" + myMSec;
        }




        document.querySelector('.button2').onclick = () => {
            clearInterval(startTimer);
            startIsPressed = false;
        }

        document.querySelector('.button3').onclick =  () => {
            document.querySelector('.time').innerHTML = '00:00:00'
            minutes = seconds = mseconds = 0;
            
        }
        

    }