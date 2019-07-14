// 10. Условия ======================================

// let num = 50;

// if (num <49) {
//     console.log("No")
// } else if ( num > 100) {
//     console.log("Mnogo")
// } else {
//     console.log("Yes")
// };

// (num == 50) ? console.log("Yes") : console.log("No");

// switch (num) {
//     case num < 49:
//         console.log("Неверно");
//         break;
//     case num > 100:
//         console.log("Много");
//         break;
//     case num > 80:
//         console.log("Все еще много");
//         break;
//     case 50:
//         console.log("Верно");
//         break;
//     default:
//         console.log("ЧТо-то пошло не так");
//         break;
// }
//  ===============================================

// 11. Циклы ======================================
// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }
// ---------
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)
// // ---------
// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i)
// }
//  ===========================================

// 13. Callback-функции =======================
// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Привет");
// console.log(num);


//  Function Declaration
    // console.log(calc(3, 4));
    // console.log(calc(2, 3));

    // function calc(a, b) {
    //     return (a + b);
    // }
// --------------

    // function retVar() {
    //     let num = 50;
    //     return num;
    // } 

    // let anotherNum = retVar();
    // console.log(anotherNum);
//  Function Declaration

// Function Expression
    // let calc = function calc(a, b) {
    //     return (a + b);
    // }
    // console.log(calc(3, 4));
    // console.log(calc(2, 3));
// Function Expression

// Function ES6 - стрелочные функции
// let calc = (a, b) => a+b;
// console.log(calc(3, 4));
// console.log(calc(2, 3));

// --------------------

let str = 'test';
console.log(str.length);

console.log( str.toUpperCase() );
console.log( str.toLowerCase() );


