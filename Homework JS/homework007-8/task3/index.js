/*
#### Технические требования:
- Нарисовать на экране поле 8*8 (можно использовать таблицу или набор блоков).
- Сгенерировать на поле случайным образом 10 мин. Пользователь не видит где они находятся.
- Клик левой кнопкой по ячейке поля "открывает" ее содержимое пользователю. 
  - Если в данной ячейке находится мина, игрок проиграл. В таком случае показать все остальные мины на поле.
   Другие действия стают недоступны, можно только начать новую игру. 
  - Если мины нет, показать цифру - сколько мин находится рядом с этой ячейкой.
  - Если ячейка пустая (рядом с ней нет ни одной мины) - необходимо открыть все соседние ячейки с цифрами.
- Клик правой кнопки мыши устанавливает или снимает с "закрытой" ячейки флажок мины.
- После первого хода над полем должна появляться кнопка "Начать игру заново", 
 которая будет обнулять предыдущий результат прохождения и заново инициализировать поле.
- Над полем должно показываться количество расставленных флажков, и общее количество мин (например `7 / 10`).

#### Не обязательное задание продвинутой сложности:
- При двойном клике на ячейку с цифрой - если вокруг нее установлено такое же количество флажков,
 что указано на цифре этой ячейки, открывать все соседние ячейки.
- Добавить возможность пользователю самостоятельно указывать размер поля.
Количество мин на поле можно считать по формуле `Количество мин = количество ячеек / 6`. */
let gameNotStarted = true;
let mseconds = 0;
let seconds = 0;
let minutes = 0;
let flagCount = 10;
let cellsCount = 0;
window.addEventListener('load', loading, false)


// Создания ячеек для игры

function loading() {
    let i = 0;
    let column = 1;
    let row = 1;
    while (i < 64) {
        const input = document.createElement('input');
        input.setAttribute('type', 'button');
        input.style.width = '11%';
        input.style.height = '20px';
        input.style.margin = '0.5px';
        input.style.paddingLeft = '4px';
        input.style.fontWeight = '700';
        input.style.paddingBottom = '2px';
        input.style.paddingTop = '0px';
        input.id = `${(row)}${column}`;
        input.haveOne = 'one';
        input.mined = 'mined';
        input.haveTwo = 'two';
        input.haveThree = 'three';
        input.empty = 'empty';
        input.flaged = 'flaged';

        ++column;
        if (column >= 9) {
            column = 1;
            row += 1;
        }
        container_btn.append(input);
        i++;
    }
    let arr = []
    generateRandom(arr);

    container_btn.addEventListener('click', game, true);
    container_btn.addEventListener('contextmenu', placeFlag, true);

}




//Генерация рандомных id для Мин
function generateRandom(arr) {
    if (arr.length < 10) {
        let newNum = Math.floor(Math.random() * (64 - 1)) + 1;
        if (arr.indexOf(newNum) == -1) {
            arr.push(newNum);
            generateRandom(arr);
        }
        else {
            generateRandom(arr);
        }

    }

    else {
        generateMines(arr);
    }

}

//Создания мин
function generateMines(arr) {
    let cells = document.querySelectorAll('input')
    let mineArr = [];
    arr.forEach(item => {
        cells[item].mined = true;

        let mineId = cells[item].id
        mineArr.push(mineId);



    });
    makeOnes(mineArr)
    return mineArr;
}

//Универсальная функция(подходит как для массива id, так и для единичного id) для поиска и возврата массива с id соседних клеток
function getNeighbors(mineArr) {
    let neighArr = [];
    if (mineArr.length > 2) {
        for (let i = 0; i < mineArr.length; i++) {
            const mineId = String(mineArr[i]);

            const mineRow = parseInt(mineId[0]);
            const mineColumn = parseInt(mineId[1]);
            neighArr.push(`${mineRow - 1}${mineColumn}`);
            neighArr.push(`${mineRow - 1}${mineColumn - 1}`)
            neighArr.push(`${mineRow - 1}${mineColumn + 1}`)
            neighArr.push(`${mineRow}${mineColumn - 1}`);
            neighArr.push(`${mineRow}${mineColumn + 1}`)
            neighArr.push(`${mineRow + 1}${mineColumn - 1}`)
            neighArr.push(`${mineRow + 1}${mineColumn}`)
            neighArr.push(`${mineRow + 1}${mineColumn + 1}`)
            for (let j = 0; j < neighArr.length; j++) {
                const row = neighArr[j][0];
                const column = neighArr[j][1];
                if (row < 1 || row > 8 || column < 1 || column > 8) {
                    neighArr.splice(j, 1);
                    j--;
                }

            }
        }
    }
    else {
        const mineId = mineArr;

        const mineRow = parseInt(mineId[0]);
        const mineColumn = parseInt(mineId[1]);
        neighArr.push(`${mineRow - 1}${mineColumn}`);
        neighArr.push(`${mineRow - 1}${mineColumn - 1}`)
        neighArr.push(`${mineRow - 1}${mineColumn + 1}`)
        neighArr.push(`${mineRow}${mineColumn - 1}`);
        neighArr.push(`${mineRow}${mineColumn + 1}`)
        neighArr.push(`${mineRow + 1}${mineColumn - 1}`)
        neighArr.push(`${mineRow + 1}${mineColumn}`)
        neighArr.push(`${mineRow + 1}${mineColumn + 1}`)
        for (let j = 0; j < neighArr.length; j++) {
            const row = neighArr[j][0];
            const column = neighArr[j][1];
            if (row < 1 || row > 8 || column < 1 || column > 8) {
                neighArr.splice(j, 1);
                j--;
            }

        }
    }
    return neighArr;
}

//Генерация клеток с единицой
function makeOnes(minesArr) {

    const onesArr = getNeighbors(minesArr);
    for (let i = 0; i < onesArr.length; i++) {
        if (minesArr.indexOf(onesArr[i]) != -1) {
            onesArr.splice(i, 1);
            i--;
        }
    }


    onesArr.forEach((item) => {
        let one = document.getElementById(`${item}`)
        one.haveOne = true;

    })
    makeTwoThree(onesArr, minesArr);
}

//Генерация клеток с двойкой и тройкой
function makeTwoThree(onesArr, minesArr) {

    onesArr.forEach((item) => {
        let neighs = getNeighbors(item);
        let minesCount = 0;
        let elemOfTwoThree = document.getElementById(`${item}`)
        for (let i = 0; i < neighs.length; i++) {
            if (minesArr.indexOf(neighs[i]) != -1) {
                minesCount++;

            }
        }
        if (minesCount == 2) {
            elemOfTwoThree.haveOne = 'one';
            elemOfTwoThree.haveTwo = true;
        }
        if (minesCount == 3) {
            elemOfTwoThree.haveOne = 'one';
            elemOfTwoThree.haveThree = true;
        }

    })

}

//Функция размещения и удаления флага
function placeFlag(e) {
    e.preventDefault()
    if (e.target.flaged == 'flaged') {
        e.target.flaged = true;
        flagCount = parseInt(flagCount);
        e.target.style.backgroundImage = 'url("./img/1.png")';
        e.target.style.backgroundSize = 'contain';
        e.target.style.backgroundPosition = 'centre';
        e.target.style.backgroundRepeat = 'no-repeat';
        --flagCount
        document.querySelector('.flags').innerHTML = `${flagCount}`
    }
    else if (e.target.flaged == true) {
        e.target.flaged = 'flaged';
        e.target.style.removeProperty('background');
        e.target.style.backgroundSize = '';
        e.target.style.backgroundPosition = '';
        e.target.style.backgroundRepeat = '';
        flagCount++
        document.querySelector('.flags').innerHTML = `${flagCount}`
    }
    // Условия победы поставленны здесь, что если последнее действие для победы установка флага, сразу после даного действия будет выполнена функция победыю
    if (cellsCount == 53 && flagCount == 0) {
        showVictory();
    }

}


// Функция игры, при нажатии ячейки, вызывается та или иная функция
function game(e) {
    if (e.target != container_btn && e.target.flaged != true) {
        showCheckedCells()
        gameNotStarted = false;
        if (gameNotStarted) {
            timer = setInterval(showTime, 1000);
        }

        if (e.target.mined == true) {
            lose(e);
        }
        
        if ( e.target.haveOne == true || e.target.haveTwo == true || e.target.haveThree == true || e.target.empty == 'empty') {
            showCell(e.target)
        }
//Здесь расположено условия, что бы после открытия последней ячейки выполнилась функция победы
        if (cellsCount == 53 && flagCount == 0) {
            showVictory();
        }


    }
}
//Функция отображающая количество открытых ячеек
function showCheckedCells(){
   let allInputs = document.querySelectorAll('#container_btn > input');
   cellsCount = 0;
   allInputs.forEach( (item)=> {
    if(item.getAttribute('disabled') == "disabled"){
        ++cellsCount;
    }
   })
   screen_cell.innerHTML = `Открыто ячеек:${cellsCount}/53`
   

}
//Время игры
function showTime() {
    seconds++;
    



    if (seconds >= 60) {
        minutes++;
        seconds = 0;
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

    document.querySelector('.time').innerHTML = myMin + ":" + mySec;
}
//Фунция отображающая клетки 1,2,3 при нажатии на ячейку
function showCell(target) {
    target.setAttribute("disabled", "disabled");
    target.style.backgroundColor = 'gray';
    
    if (target.haveOne == true) {
        target.style.color = 'blue';
        target.value = '1';
    }
    else if (target.haveTwo == true) {
        target.style.color = 'green';
        target.value = '2';
    }
    else if (target.haveThree == true) {
        target.style.color = 'red';
        target.value = '3';
    }
    else {
        showEmptyCells(target)
    }


}
// Функция раскрывающая ближайшие пустые ячейки и цифры
function showEmptyCells(target) {
    target.setAttribute("disabled", "disabled");
    target.style.backgroundColor = 'gray';
    target.empty = false;
    const emtyCellId = target.id;
    let neighs = getNeighbors(emtyCellId);
    neighs.forEach((item) => {
        const cell = document.getElementById(item);
        if (cell.haveOne == true || cell.haveTwo == true || cell.haveThree == true) {
            showCell(cell)
        }
        else if (cell.empty == 'empty' ) {
            showEmptyCells(cell)
        }
    })


}
//Функция победы
function  showVictory(){
    
    alert('Поздравляю! Вы победили!!')
    container_btn.removeEventListener('click', game, true);
    screen_cell.innerHTML = 'Начать заново';
    screen_cell.addEventListener('click', refreshGame, false);
    clearTimeout(timer);

}
//Функция поражения(нажатия на мину)
function lose(e) {
    alert('Вы проиграли')
    container_btn.removeEventListener('click', game, true);
    const allInputs = document.querySelectorAll('input')
    let mines = [];
    allInputs.forEach((item) => {
        if (item.mined == true) {
            item.setAttribute("disabled", "disabled");
            item.style.backgroundImage = 'url("./img/3.png")'
            item.style.backgroundSize = 'contain';
            item.style.backgroundPosition = 'centre';
            item.style.backgroundRepeat = 'no-repeat'
        }
    })
    e.target.style.backgroundColor = 'red';
    
    screen_cell.innerHTML = 'Начать заново';

    screen_cell.addEventListener('click', refreshGame, false);
    clearTimeout(timer);
}

//Функция обновления и начала новой игры
function refreshGame() {
    gameNotStarted = true;
    screen_cell.removeEventListener('click', refreshGame, false);
    container_btn.addEventListener('click', game, true);
    const allInputs = document.body.querySelectorAll('input')
    allInputs.forEach((input) => {
        input.haveOne = 'one';
        input.mined = 'mined';
        input.haveTwo = 'two';
        input.haveThree = 'three';
        input.empty = 'empty';
        input.removeAttribute("disabled", "disabled");
        input.style.backgroundColor = '';
        input.style.backgroundImage = '';
        input.style.backgroundSize = '';
        input.style.backgroundPosition = '';
        input.style.backgroundRepeat = ''
        input.value = '';
        input.style.color = '';
    })
    document.querySelector('.time').innerHTML = '00:00'
    document.querySelector('.flags').innerHTML = '10';
    screen_cell.innerHTML = 'Началась новая игра'
    flagCount = 10;
    let arr = []
    generateRandom(arr);


}
