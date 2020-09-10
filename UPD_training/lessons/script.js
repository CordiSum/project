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


// Array and pseudo-arrays

const arr = [2, 1, 7, 12, 22, 31, 43, 6 ,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

arr.forEach(function(item, i, arr) {
 console.log(`${i}: ${item} внутри массива ${arr}`);
});

const string = prompt("", "");
const products = string.split(", ");
products.sort();
console.log(products.join('; '));


// Pass by reference or by value, Spread operator
let a = 5,
    b = a;

    b = b + 5;
    console.log(b);
    console.log(a);

    const obj = {
        a: 5,
        b: 1
    }

    const copy = obj;

    copy.a = 10;
    console.log(copy);
    console.log(obj);
    
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy
}

const numbers = {
    a: 2, 
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d:   17,
    i: 20
};

const clone = Object.assign({}, add);
clone.d = 20; // changed obj


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //copy Array 

newArray[1] = 'asdsad';
console.log(newArray);
console.log(oldArray);

//copy array with help spread
const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wp', 'livejournal', 'blogger'];
const intenet = [...video, ...blogs, 'vk', 'fb'];

console.log(intenet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};