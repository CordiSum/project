window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //  TIMER 

    let deadline = '2020-11-01';

    function  getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)));

        // let hours = Math.floor((t/1000/60/60) % 24); для получения дней
        // let days = Math.floor((t/(1000*60*60*24))); для получения дней

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);


    // FORM

    // let message = {
    //     loading: 'Загрузка...',
    //     success: 'Thanks, скоро мы с Вами свяжемся',
    //     failure: 'Что-то пошло не так...'
    // }

    // let form = document.querySelector('.main-form');
    // let input = form.getElementsByTagName('input');
    // let statusMessage = document.createElement('div');

    // statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //отправка на сервер в обычном формате
    //     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


    //     let formData = new FormData(form);

    //     let obj = {}; //создаем промежуточный объект для преобразования в JSON
    //     formData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj); // метод stringify превращаем JS объект в JSON

    //     //request.send(formData); // для обычной отправки
    //     request.send(json);//для отвравки JSON

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }

    // });


    // ==================.
    let message = {
        loading: 'Загрузка...',
        success: 'Thanks, скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    
    let form = document.querySelector('.main-form');
    let statusMessage = document.createElement('div');
    let formData = new FormData(form);
    
    statusMessage.classList.add('status');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
    
        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            statusMessage.innerHTML = message.success
        })
        .catch(statusMessage.innerHTML = message.failure)
    });

});

// MODAL WINDOW

let more = document.querySelector('.more');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');
let descriptionBtn = document.querySelectorAll('.description-btn');

more.addEventListener('click', function() {
    overlay.style.display ='block';
    this.classList.add('more-splash');
    document.body.style.overflow ='hidden';
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow ='';
});

descriptionBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        overlay.style.display ='block';
        this.classList.add('more-splash');
        document.body.style.overflow ='hidden';
    });
  });

// END MODAL WINDOW

