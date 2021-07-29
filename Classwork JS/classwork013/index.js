/*
Создайте приложение курс валют(Оформить подобно табло обмена валют). Курс брать с АРI НБУ и
встроить в свое приложение.
 */
window.addEventListener('load',loading,true);

function loading(){
    let xml = new XMLHttpRequest();
    xml.open('GET',"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",true);
    xml.onreadystatechange = () => {
        if(xml.readyState == 4 && xml.status == 200){
            let data = JSON.parse(xml.responseText);
           let table = document.querySelector('table')
            data.forEach(element => {
                let tr = document.createElement('tr')
                let td1 = document.createElement('td')
                let td2 = document.createElement('td')
                let td3 = document.createElement('td')
                let td4 = document.createElement('td')
                td1.innerHTML = element.r030;
                td2.innerHTML = element.cc;
                td3.innerHTML = element.txt;
                td4.innerHTML = element.rate;
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
                table.append(tr);
            });
        }
    }
    xml.send();
}