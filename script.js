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

// 12. Функции =======================
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

// let str = 'test';
// console.log(str.length);

// console.log( str.toUpperCase() );
// console.log( str.toLowerCase() );


// let twelve = '12.2';

// console.log( Math.round(twelve) );

// let twelve = '12.2px';

// console.log( parseInt(twelve) );
// console.log( parseFloat(twelve) );
// ==================================

//  Объяснение замыкания https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
//  let a = 3
//  function addTwo(x) {
//    let ret = x + 2
//     return ret
// }
// let b = addTwo(a)
// console.log(b)

// let val1 = 2
//  function multiplyThis(n) {
//    let ret = n * val1
//    return ret
//  }
//  let multiplied = multiplyThis(6)
//  console.log('example of scope:', multiplied)
// // ----------------------------------------------------
//  let val = 7
//  function createAdder() {
//     function addNumbers(a, b) {
//       let ret = a + b
//     return ret
//    }
//  /*7*/  return addNumbers
//  }
//  let adder = createAdder()
//  let sum = adder(val, 8)
//  console.log('example of function returning a function: ', sum)

// //  функция замаыкание
//             function createCounter() {
//     /*2:*/   let counter = 0
//     /*3:*/   const myFunction = function() {
//     /*4:*/     counter = counter + 1
//     /*5:*/     return counter
//     /*6:*/   }
//     /*7:*/   return myFunction
//     /*8:*/ }
//     /*9:*/ const increment = createCounter()
//    /*10:*/ const c1 = increment()
//    /*11:*/ const c2 = increment()
//    /*12:*/ const c3 = increment()
//     console.log('example increment', c1, c2, c3)

// =============================================

// 13. Callback-Функции =======================


// function first() {
//     setTimeout( function() {
//     console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();
// ------------------------------

// function learnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел 3-й урок');
// });
// ---------------------------------

// function learnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// function done() {
//     console.log('Я прошел 3-й урок');    
// }
// learnJS('JavaScript', done);

// ============================================

// 14. Объекты ================================

