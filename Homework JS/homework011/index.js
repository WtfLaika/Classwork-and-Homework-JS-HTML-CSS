/*
Создайте приложение, в котором пользователь будет отправлять запросы по адресу: 
‘https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json’ и получать
текущий курс гривны по отношению к иностранным валютам. Отфильтруйте полученный
список по уровню курса - только те элементы, у которых курс больше 25грн. 
В случае ошибки – отобразите ее пользователю в теле документа. В случае успеха – 
отобразите вывод данных в виде таблицы.
 */

window.addEventListener('load', loading, true);

function loading() {
    currency_btn.addEventListener('click', makeRequest, false);
}

function makeRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            let oldCurrency = document.querySelectorAll('.new_currency');
            if (oldCurrency.length > 0) {
                deleteOldCurrency(oldCurrency);
            }
            createNewCurrency(data);
        }
        else if(xhr.status > 400){
            showError(xhr);
        }

    }
    xhr.send();

}





function deleteOldCurrency(oldCurrency) {
    oldCurrency.forEach(element => {
        element.remove();
    });
}

function createNewCurrency(data) {
    let table = document.querySelector('table');
    table.style.display = 'table';
    data.forEach((item) => {
        if(item.rate > 25){
        let tr = document.createElement('tr');
        tr.setAttribute('class', 'new_currency')
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td1.innerHTML = item.r030;
        td2.innerHTML = item.cc;
        td3.innerHTML = item.txt;
        td4.innerHTML = item.rate;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        table.append(tr);
        }
    })
}

function showError(xhr) {
    alert(`Ошибка! Код ошибки ${xhr.status}`);
}