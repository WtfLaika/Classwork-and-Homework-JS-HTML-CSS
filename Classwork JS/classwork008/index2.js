window.onload = () => {



    button.onclick = () => {
        let myDiv = document.createElement('div');
        myDiv.innerHTML = 'unknown information';
        myDiv.className = 'myDiv';
        counterDiv = document.querySelectorAll('body > div')
        if (counterDiv.length < 10) {
            document.body.appendChild(myDiv);
        } else {

            document.body.querySelectorAll('.myDiv').forEach(element => {
                element.remove();
            });
        }   

    }
   
}