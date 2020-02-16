// null, undefined, boolean, number, string, object, symbol
// console.log(typeof 0)
// console.log(typeof false)
// console.log(typeof 'string')
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol("JS"))
// console.log(typeof null) // неточность typeof - на самом деле тип данных null
// console.log(typeof function() {}) //неточность typeof - функция является объектом
// console.log(typeof NaN)

// ========================================
//             Приведение типов
// ========================================
// let language = 'JS'
// if (language) {
//     console.log(" The best : " , language)
// }

// '', 0, nuul, undefined, NaN,false
// console.log(Boolean(''))  //false
// console.log(Boolean(' ')) //true
// console.log(Boolean('Hello')) //true
// console.log(Boolean('0')) //true
// console.log(Boolean(0)) //false
// console.log(Boolean(null)) // false
// console.log(Boolean([])) //true
// console.log(Boolean({})) //true 
// console.log(Boolean(function() {})) //true 

// ========================================
//             Строки и числа
// ========================================

// console.log(1+ '2') //string 12
// console.log('' + 1 + 0) //string 10 
// console.log('' - 1 + 0) // number -1
// console.log('3' * '8') //number 24
// console.log(4 + 10 + 'px') //number + string 14px
// console.log('px' + 5 + 10) //string px510
// console.log('42' - 40) // number 2
// console.log('42px' - 40) // NaN
// console.log(null + 2) // number 2
// console.log(undefined + 42) // NaN

// ========================================
//             == vs ===
// ========================================
// console.log(2 == '2') //true
// console.log(2 === '2') //false
// console.log(undefined == null) //true
// console.log(undefined === null) //false
// console.log('0' == false) //true
// console.log('0' == 0) //true
// console.log(0 == 0) //true


// =======================================================================================================
// =======================================================================================================
// console.log(false == '') //true
// console.log(false == []) //true
// console.log(false == {}) //false

// console.log('' == 0) //true
// console.log('' == []) //true
// console.log('' == {}) //false

// console.log(0 == []) //true
// console.log(0 == {}) //false
// console.log(0 == null) //false

