/*
Классная работа 
Используя исключительно J5 Сгенерируйте страницу курсов валют с приват банка и добавьте её в id root на странице inner.html 
файл находится в репозитории в папке к уроку CW. Курс должен выводить не менее 4 валют Пример USD 24.80 25.00 */

window.onload = () => {
    const table = document.createElement('table');
    table.style.textAlign = 'center';
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.borderSpacing = '0px';


    document.body.prepend(table);
    let arr = [
        ['Код цифровий', 'Код літерний', 'Кількість одиниць валюти', 'Назва валюти', 'Офіційний курс'],
        ['036', 'AUD', '1', 'Австралійський долар', '20,9912'],
        ['933', 'BYN', '1', 'Білоруський рубль', '10,8475'],
        ['975', 'BGN', '1', 'Болгарський лев', '16,8862'],
        ['410', 'KRW', '100', 'Вона', '2,4291']
    ];

    arr.forEach((item1, index) => {
        const tr = document.createElement('tr');
        table.append(tr)
        item1.forEach(item2 => {
            if (index == 0) {
                const currentItem = document.createElement('th');
                currentItem.innerHTML = `${item2}`;
                tr.append(currentItem);
                tr.style.color = 'green';
                currentItem.style.border = '1px solid black';
                currentItem.style.width = '20%';
            }
            else {
                const currentItem = document.createElement('td');
                currentItem.innerHTML = `${item2}`;
                tr.append(currentItem);
                currentItem.style.border = '1px solid black';
                currentItem.style.width = '20%';
            }

        })

    })
  


}
