"use strict";
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

// Объекты, деструктуризация объекта 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

const {border, bg} = options.colors;

console.log(bg);

options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);


// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]} `);
            // counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]} `);
        counter++;
    }    
}
console.log(counter);