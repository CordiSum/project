// touchstart
// touchmove
// touchend
// touchetner
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log('Red box: touchstart');
        console.log(e.target);        
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red box: ' + e.touches[0].pageX);
    });

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log('Red box: touchend');
    });

    // -------------------------------------------
    // два способа создания регулярного выражения
    // new RegExp('pattern', 'flags');
    // /pattern/flags  

    //  =====================
    // Какие есть флаги?

    // i - флаг регистра, ищет в не зависиммости от регистра (большая или маленькая буква)
    // g - ищем глобально, не только первое вхождение, но и все остальные
    // m - флаг многострочности

    //  ====================
    // Какие есть класы?

    // \d - искать все цифры
    // \D - искать не число
    // \w - искать все буквы
    // \W - искать не букву
    // \s - искать пробелы
    // \S - искать не пробел
    // =====================

    // let ans = prompt("What is your name?");

    // let reg = /n/i;
    // console.log(ans.search(reg));

    // let reg = /n/gi;
    // console.log(ans.match(reg));

    // let reg = /n/gi;
    // console.log(reg.test(ans));
    // ----------------

    // let pass = prompt('Enter password');

    // console.log(pass.replace(/./g, '*')); /* заменяем любые введенные данные на звездочки*/
    // alert('12-36-54'.replace(/-/g, ':')); /* заменяем дефис на двоеточие */

    // ----------------

    // let ans = prompt("Enter number?");

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    // let str = 'My name is R2D2'

    // console.log(str.match(/\w\d\w\d/i));

    let str = 'My name is/ R2D2'

    console.log(str.match(/\//i)); /* искать слеш*/
});
