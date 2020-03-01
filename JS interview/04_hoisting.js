// console.log(sum(1, 41));

// function sum(a, b) {
//     return a + b;
// }

// var i
// console.log(i); //undefinded
// var i = 42;
// console.log(i); //42

// console.log(num);  //error
// const num = 44;
// console.log(num);

// ================================================================================
//             Function Expression & Function Declaration
// ================================================================================


console.log(square(25)); //Declaration

//Function Declaration - функция, объявленная в основном потоке кода. Создается до выполнения кода.
// function square(num) {
//     return num ** 2;
// }

//Function Expression - объявление функции в контексте какого-либо выражения, например присваивания.
const square = function(num) {
    return num ** 2;
}

console.log(square(25)); // Expression 
