"use strict";


// To string

// 1
console.log(typeof(String(null)));

// 2
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1
console.log(typeof(Number("3")));

// 2
console.log(typeof(+'5'));

// 3
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean
// 0, '', null, undefined, NaN; 
// 3.1
let switcher = null;

if (switcher) {
    console.log("working...");
}

switcher = 1;

if (switcher) {
    console.log("working...");
}

// 3.2
console.log(typeof(Boolean("3")));

// 3.3
console.log(typeof(!!"44"));