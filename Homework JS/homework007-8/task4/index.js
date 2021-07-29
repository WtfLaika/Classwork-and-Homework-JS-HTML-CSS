/**Задание 4*

## Задание

Написать реализацию функции, которая позволит создавать объекты типа Hamburger, используя возможности стандарта ES5.

#### Технические требования:
- Некая сеть фастфудов предлагает два вида гамбургеров:

- маленький (50 гривен, 20 калорий)
- большой (100 гривен, 40 калорий)
- Гамбургер должен включать одну дополнительную начинку (обязательно):

- сыр (+ 10 гривен, + 20 калорий)
- салат (+ 20 гривен, + 5 калорий)
- картофель (+ 15 гривен, + 10 калорий)
- Дополнительно, в гамбургер можно добавить приправу (+ 15 гривен, 0 калорий) и полить майонезом (+ 20 гривен, + 5 калорий).
- Необходимо написать программу, рассчитывающую стоимость и калорийность гамбургера. Обязательно нужно использовать ООП подход 
(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).
- Код необходимо написать под стандарт ES5.
- Код должен быть защищен от ошибок. Представьте, что вашим классом будет пользоваться другой программист.
 Если он передает неправильный тип гамбургера, например, или неправильный вид добавки, должно выбрасываться исключение 
 (ошибка не должна молча игнорироваться). https://learn.javascript.ru/try-catch
- Написанный класс должен соответствовать следующему jsDoc описанию 
(то есть содержать указанные методы, которые принимают и возвращают данные указанного типа и 
    выбрасывают исключения указанного типа. Комментарии ниже тоже можно скопировать в свой код):

//                ```javascript
//                /**
//                * Класс, объекты которого описывают параметры гамбургера. 
//                * 
//                * constructor
//                * param size        Размер
//                * param stuffing    Начинка
//                * throws {HamburgerException}  При неправильном использовании
//                */
//                 function Hamburger(size, stuffing) { ... } 

//                 /* Размеры, виды начинок и добавок */
//                 Hamburger.SIZE_SMALL = ...
//                 Hamburger.SIZE_LARGE = ...
//                 Hamburger.STUFFING_CHEESE = ...
//                 Hamburger.STUFFING_SALAD = ...
//                 Hamburger.STUFFING_POTATO = ...
//                 Hamburger.TOPPING_MAYO = ...
//                 Hamburger.TOPPING_SPICE = ...

//                 /**
//                 * Добавить добавку к гамбургеру. Можно добавить несколько
//                 * добавок, при условии, что они разные.
//                 * 
//                 * @param topping     Тип добавки
//                 * @throws {HamburgerException}  При неправильном использовании
//                 */
//                 Hamburger.prototype.addTopping = function (topping) ...

//                 /**
//                  * Убрать добавку, при условии, что она ранее была 
//                  * добавлена.
//                  * 
//                  * @param topping   Тип добавки
//                  * @throws {HamburgerException}  При неправильном использовании
//                  */
//                 Hamburger.prototype.removeTopping = function (topping) ...

//                 /**
//                  * Получить список добавок.
//                  *
//                  * @return {Array} Массив добавленных добавок, содержит константы
//                  *                 Hamburger.TOPPING_*
//                  */
//                 Hamburger.prototype.getToppings = function () ...

//                 /**
//                  * Узнать размер гамбургера
//                  */
//                 Hamburger.prototype.getSize = function () ...

//                 /**
//                  * Узнать начинку гамбургера
//                  */
//                 Hamburger.prototype.getStuffing = function () ...

//                 /**
//                  * Узнать цену гамбургера
//                  * @return {Number} Цена в тугриках
//                  */
//                 Hamburger.prototype.calculatePrice = function () ...

//                 /**
//                  * Узнать калорийность
//                  * @return {Number} Калорийность в калориях
//                  */
//                 Hamburger.prototype.calculateCalories = function () ...

//                 /**
//                  * Представляет информацию об ошибке в ходе работы с гамбургером. 
//                  * Подробности хранятся в свойстве message.
//                  * @constructor 
//                  */
//                 function HamburgerException (...) { ... }
//                 ```

//  Комментарии:
//  - Это задача на ООП. Вам нужно сделать класс, который получает на вход информацию о гамбургере,
//  и на выходе дает информацию о весе и цене. Никакого взаимодействия с пользователем и внешним миром класс делать не должен
//  - все нужные данные ему необходимо передать явно. Он ничего не будет спрашивать, и не будет ничего выводить.
//  - Почему? Потому что каждый должен заниматься своим делом, класс должен только обсчитывать гамбургер,
//  а вводом-выводом должны заниматься другие части кода. Иначе мы получим кашу, где разные функции смешаны вместе.
//  - Типы начинок, размеры надо сделать константами. Никаких магических строк не должно быть.
//  - Переданную информацию о параметрах гамбургера экземпляр класса хранит внутри в своих полях. 
// Вот как может выглядеть использование этого класса:

//                 ```javascript
//                 // маленький гамбургер с начинкой из сыра
//                 var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//                 // добавка из майонеза
//                 hamburger.addTopping(Hamburger.TOPPING_MAYO);
//                 // спросим сколько там калорий
//                 console.log("Calories: %f", hamburger.calculateCalories());
//                 // сколько стоит
//                 console.log("Price: %f", hamburger.calculatePrice());
//                 // я тут передумал и решил добавить еще приправу
//                 hamburger.addTopping(Hamburger.TOPPING_SPICE);
//                 // А сколько теперь стоит? 
//                 console.log("Price with sauce: %f", hamburger.calculatePrice());
//                 // Проверить, большой ли гамбургер? 
//                 console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
//                 // Убрать добавку
//                 hamburger.removeTopping(Hamburger.TOPPING_SPICE);
//                 console.log("Have %d toppings", hamburger.getToppings().length); // 1
//                 ```

//  - При неправильном использовании класс сообщает об этом с помощью выброса исключения.

//                 ```javascript
//                 // не передали обязательные параметры
//                 var h2 = new Hamburger(); // => HamburgerException: no size given

//                 // передаем некорректные значения, добавку вместо размера
//                 var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
//                 // => HamburgerException: invalid size 'TOPPING_SAUCE'

//                 // добавляем много добавок
//                 var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//                 hamburger.addTopping(Hamburger.TOPPING_MAYO);
//                 hamburger.addTopping(Hamburger.TOPPING_MAYO); 
//                 // HamburgerException: duplicate topping 'TOPPING_MAYO'

//                 ```

//  - В коде выше обратите внимание на такие моменты:
//  - класс не взаимодействует с внешним миром. Это не его дело, этим занимается другой код, а класс живет в изоляции от мира
//  - обязательные параметры (размер и начинка) мы передаем через конструктор, чтобы нельзя было создать объект, не указав их
//  - необязательные (добавка) добавляем через методы
//  - имена методов начинаются с глагола и имеют вид «сделайЧтоТо»: calculateCalories(), addTopping()
//  - типы начинок обозначены "константами" с понятными именами
//  - об исключительных ситуациях сообщаем с помощью исключений
//  - объект создается через конструктор - функцию, которая задает начальные значения полей.
//  Имя конструктора пишется с большой буквы и обычно является существительным: new Hamburger(...)
//  - "константы" вроде `Hamburger.SIZE_SMALL` могут иметь значение, являющееся строкой или числом. 
// От смены значения константы ничего не должно меняться (то есть эти значения не должны где-то еще быть записаны).
//  К сожалению, в отличие от других языков (Java, PHP, C#) при опечатке в имени такой "константы" интепретатор JS не укажет на ошибку
//  - в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки), 
// но не хранить вычисляемые значения (цена, число калорий и т.д.). Рассчитывать цену и калории логично в тот момент, 
// когда это потребуется, а не заранее.
//  - в JS нет синтаксиса, чтобы пометить свойство или метод приватным 
// (доступным для использования только внутри класса), потому некоторые разработчики начинают 
// их имена с подчеркивания и договариваются, что извне класса к ним никто не обращается. 
// Вообще, в JS до версии ES6 нет нормальных классов, потому многое основано на таких договоренностях.
//  - В дополнение, вот еще инструкция, как решать задачи на ООП. Когда ты решаешь задачу на ООП, ты должен ответить на вопросы:
//  - какие есть сущности, для которых мы сделаем классы? (Гамбургер).
//  - какие у них есть свойства (размер, начинка, добавки). 
// Цена или калории не являются свойствами так как они вычисляются из других свойств и хранить их не надо.
//  - что мы хотим от них получить (какие у них должны быть методы). Например, сколько стоит гамбургер?
//  - как сущности связаны? У нас одна сущность «Гамбургер» и она ни с чем не связана.
//  - Заметьте также, что в примере выше класс не взаимодействует с внешним миром. 
// За это отвечает внешний относительно него код. Потому наш класс унивесален: его можно использовать в консоли, 
// выводя данные через console.log, а можно приделать навороченный HTML-интерфейс 
// с кнопками для запуска на планшете с тачскрином. Именно в таком стиле необходимо писать ООП код.
//  - Классы в JS имитируются ~~всякими костылями~~ разными споcобами, самый общеупотребимый - 
// через добавление методов в прототипы объекта.
//  Литература:
//  - [ООП в функциональном стиле - Введение](http://learn.javascript.ru/about-oop)
//  - [Прототип объекта](https://learn.javascript.ru/prototype)
//  - [Внутренний и внешний интерфейс](http://learn.javascript.ru/internal-external-interface)
//  - [Перехват ошибок, "try..catch"](http://learn.javascript.ru/exception)
//  - [throw](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw) */

class Hamburger {
    static SIZE_SMALL = {
        small: {
            price: 50,
            ccal: 20
        }

    };

    static SIZE_LARGE = {
        large: {
            price: 100,
            ccal: 40
        }

    };
    static STUFFING_CHEESE = {
        cheese: {
            price: 10,
            ccal: 20
        }
    };
    static STUFFING_SALAD = {
        salad: {
            price: 20,
            ccal: 5
        }
    };
    static STUFFING_POTATO = {
        potato: {
            price: 15,
            ccal: 10
        }
    };
    static TOPPING_MAYO = {
        mayo: {
            price: 15,
            ccal: 10
        }
    };
    static TOPPING_SPICE = {
        spice: {
            price: 15,
            ccal: 10
        }
    };

    constructor(size, stuffing) {
        if ((stuffing != Hamburger.STUFFING_CHEESE && stuffing != Hamburger.STUFFING_POTATO && stuffing != Hamburger.STUFFING_SALAD) && (size != Hamburger.SIZE_LARGE && size != Hamburger.SIZE_SMALL)) {
            throw new HamburgerException('Вы неправильно ввели или не ввели параметры size и stuffing ')
        }
        else if (size != Hamburger.SIZE_LARGE && size != Hamburger.SIZE_SMALL) {
            throw new HamburgerException("Вы неправильно ввели  или не ввелли параметр size ")
        }
        else if (stuffing != Hamburger.STUFFING_CHEESE && stuffing != Hamburger.STUFFING_POTATO && stuffing != Hamburger.STUFFING_SALAD) {
            throw new HamburgerException('Вы неправильно ввели или не ввели параметр stuffing')
        }

        this._SIZE = [size];
        this._STUFFING = [stuffing];
        this._TOPPING = [];
    }
    get SIZE() {
        return this._SIZE;
    }
    get STUFFING() {
        return this._STUFFING;
    }
    get TOPPING() {
        return this._TOPPING;
    }
    set SIZE(value) {
        return alert('Ошибка!Не меняй свойство SIZE');
    }
    set STUFFING(value) {
        return alert('Ошибка!Не меняй свойство STUFFING')
    }
    set TOPPING(value) {
        return alert('Ошибка!Не меняй свойство Topping')
    }

    addTopping(topping) {
        const indexTop = this.TOPPING.indexOf(topping);

        if (topping == Hamburger.TOPPING_SPICE || topping == Hamburger.TOPPING_MAYO) {
            
            if (indexTop != -1) {
                throw new HamburgerException('Вы ввели дважды один и тот же  topping')
            }
            return this.TOPPING.push(topping);
        }
        else {
            throw new HamburgerException('Неправилно введен topping')
        }
    }
    removeTopping(topping) {
        const indexTop = this.TOPPING.indexOf(topping);

        if (topping == Hamburger.TOPPING_SPICE || topping == Hamburger.TOPPING_MAYO) {

            if (indexTop == -1) {
                throw new HamburgerException('Нельзя удалить topping,если вы не добавляли его ранее')
            }
            return this.TOPPING.splice(indexTop, 1);
        }
        else {
            throw new HamburgerException('Неправилно введен topping')
        }

    }
    addStuffing(stuffing) {
        const indexSuf = this.STUFFING.indexOf(stuffing);

        if (stuffing == Hamburger.STUFFING_CHEESE || stuffing == Hamburger.STUFFING_POTATO || stuffing == Hamburger.STUFFING_SALAD) {
            if (indexSuf != -1) {
                throw new HamburgerException('Вы ввели дважды один и тот же  stuffing')
            }
            else {
               return  this.STUFFING.push(stuffing);
            }

        }
        else {
            throw new HamburgerException('Неправильно введен stuffing')
        }
    }
    removeStuffing(stuffing) {
        const indexSuf = this.STUFFING.indexOf(stuffing);

        if (stuffing == Hamburger.STUFFING_CHEESE || stuffing == Hamburger.STUFFING_POTATO || stuffing == Hamburger.STUFFING_SALAD) {
            if (indexSuf == -1) {
                throw new HamburgerException("Нельзя удалить topping,если вы не добавляли его ранее")
            }
            return this.STUFFING.splice(indexTop, 1);
        }
        else {
            throw new HamburgerException('Неправильно введен stuffing')
        }
    }
    getTopping() {
        if (this.TOPPING.length > 0) {
            return this.TOPPING;
        }
        else {
            return "Пусто";
        }
    }
    getSize() {
        if (this.SIZE.length > 0) {
            return this.SIZE;
        }
        else {
            return "Пусто";
        }

    }
    getStuffing() {
        if (this.SIZE.length > 0) {
            return this.STUFFING;
        }
        else {
            return "Пусто";
        }
    }
    calculatePrice() {
        const sum1 = this.getSum(this._SIZE, 'price');
        const sum2 = this.getSum(this._TOPPING, 'price');
        const sum3 = this.getSum(this._STUFFING, 'price');
        return sum1 + sum2 + sum3 + ' грн.';
    }
    getSum(arr, prop) {
        if (arr.length > 0) {
            let sum = 0;
            arr.forEach((item) => {
                for (let key in item) {
                    for (let secondKey in item[key]) {
                        if (secondKey == prop) {
                            sum += item[key][secondKey];
                        }
                    }
                }
            });
            return sum
        }
        else return 0;
    }
    calculateCalories() {
        const sum1 = this.getSum(this._SIZE, 'ccal');
        const sum2 = this.getSum(this._TOPPING, 'ccal');
        const sum3 = this.getSum(this._STUFFING, 'ccal');
        return sum1 + sum2 + sum3 + 'ccal';
    }


}

function HamburgerException(message) {

    this.name = 'Ошибка';
    this.message = message;

}


try {
    const vasya = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    vasya.addStuffing(Hamburger.STUFFING_SALAD);
    console.log(vasya.getStuffing() );
}
catch (e) {
    console.log(e.name, e.message)
}
