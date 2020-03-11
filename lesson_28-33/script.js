// Интерпояция

//  let name = 'Dimas';
// let age = '32';
// let mail = 'asd@gmail.com';

// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);


// ================================    var,let and const
// function makeArray() { 
//     var items = [];

//     for ( var i = 0; i < 10; i++) {   // используем var 
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }
//     return items;
// }

// var arr = makeArray();

// arr[1](); // 10
// arr[3](); // 10
// arr[7](); // 10

// function makeArray() { 
//     var items = [];

//     for ( let i = 0; i < 10; i++) {   // заменили  на let 
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }
//     return items;
// }

// var arr = makeArray();

// arr[1](); // 1
// arr[3](); // 3
// arr[7](); // 7



// =============================================  стрелочные функции

let fun = () => {
    console.log(this);
};

// fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
        
    }
    show();
});


//  =======================  Параметры по умолчинию
function caclOrDouble(number, basis = 2) {  // ES6  добавляем второму параметру = 2
    // basis = basis || 2; // ES5
    console.log(number*basis);
}

caclOrDouble(3,5);
caclOrDouble(6);


// ======================= Классы
class Rectangle {
    constructor(height, width) { // можно использовать параметры по умолчанию напр. width = 20
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

// ====================== Spread-оператор  (три точки) оператор разворота массива

let video = ['yuotube', 'vimeo', 'rutube'];
let blogs = ['WP', 'LJ', 'blogger'];
let internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];
log(...numbers);