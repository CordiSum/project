"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

// ======

const soldier = {
    health: 400,
    armor: 200,
    sayHi: function() {
        console.log("Hello");
    }
};

const jon = Object.create(soldier);

// const jon = {
//     health: 100
// }

// jon.__proto__ = soldier;

// Object.setPrototypeOf(jon, soldier);


// console.log(jon.armor);
jon.sayHi();

// =========


