window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    const numbersPat = /(\d*[.]?\d*)$/
    const mistake = /\d+[.]\d+/;
    let a, b


    container.addEventListener('click', (e) => {
        switch (e.target) {

            case clear:
                area.value = '';
                a = b = c = '';
                break;

            case reverse:
                if (numbersPat.test(area.value)) {
                    let text = area.value;
                    let numbs = '-' + text.match(numbersPat)[0];

                    area.value = text.replace(numbersPat, numbs)
                }


                break;

            case percent:
                if (numbersPat.test(area.value)) {
                    area.value = area.value / 100;
                }

                break;

            case divide:
                if (numbersPat.test(area.value)) {
                    a = area.value;
                    b = "/";
                    area.value = '';

                }
                break;

            case multiply:
                if (numbersPat.test(area.value)) {
                    a = area.value;
                    b = '*';
                    area.value = '';
                }
                break;

            case minus:
                if (numbersPat.test(area.value)) {
                    a = area.value;
                    b = '-';
                    area.value = '';
                }
                break;

            case plus:
                if (numbersPat.test(area.value)) {
                    a = area.value;
                    b = '+';
                    area.value = '';
                }
                break;

            case equal:
                if (numbersPat.test(area.value)) {
                    let c = area.value;
                    if (b == "/") {
                        area.value = a / c;
                        a = b = c = '';
                    }
                    if (b == "*") {
                        area.value = a * c;
                        a = b = c = '';
                    }
                    if (b == "+") {
                        area.value = Number(a) + Number(c);
                        a = b = c = '';
                    }
                    if (b == "-") {
                        area.value = a - c;
                        a = b = c = '';
                    }

                }

                break;

            case one:
                area.value += '1';
                break;

            case two:
                area.value += "2";
                break;

            case three:
                area.value += "3";
                break;

            case four:
                area.value += "4";
                break;

            case five:
                area.value += "5";
                break;

            case six:
                area.value += "6";
                break;

            case seven:
                area.value += '7';
                break;

            case eight:
                area.value += "8";
                break;

            case nine:
                area.value += "9";
                break;

            case zero:
                area.value += "0";
                break;

            case coma:
                if (numbersPat.test(area.value) && !(mistake.test(area.value))) {
                    area.value += '.';
                }
                break;

        }

    }, true)
}, false)