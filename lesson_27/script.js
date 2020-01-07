// ES5 --------------------------------
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit()

// ES6 ------------------------------
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// alex.hello()
// ivan.exit()


// Контекст this -----------------------

// 'use strict';
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};

obj.sum();


// 1) простой вызов функции - window/undefined
