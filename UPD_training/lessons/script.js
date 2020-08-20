const str = 'tes2t';
console.log(str.length);
console.log(str.toUpperCase());

const fruit = "some fruit";

console.log(fruit.indexOf('fruit'));

const logg = "Hello world";

console.log(logg.slice(6, 11));

const num = "12.2px";
const test = parseInt(num);

// callback function

function first() {
    //DO something
    setTimeout(function() {
        console.log(1);
    }, 1000);
}
function second() {
    //DO something
        console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}
learnJS('JS', done);