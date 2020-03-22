// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

// ==========  currency USD/UAH No Promise

// let inputUah = document.getElementById('uah');
// let inputUsd = document.getElementById('usd');

// inputUah.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     // request.open(method, url, async, login, pass);
//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     //status
//     //statusText
//     //responseText / response
//     //readyState

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputUah.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });
// });


// =================== PROMISE

let inputUah = document.getElementById('uah');
let inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () => {


    function catchData() {

        return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', 'current.json');
    
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.onload = function() {
            if (request.readyState === 4) {
                if (request.status == 200) {
                    resolve(this.response)
                } else {
                    reject();
                }
            }
        }
        });
    };

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputUah.value / data.usd;
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = "Что-то пошло не так!")

});







