// null, undefined, boolean, number, string, object, symbol
console.log(typeof 0)
console.log(typeof false)
console.log(typeof 'string')
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol("JS"))
console.log(typeof null) // неточность typeof - на самом деле тип данных null
console.log(typeof function() {}) //неточность typeof - функция является объектом
console.log(typeof NaN)

// Приведение типов
// let language = 'JS'
// if (language) {
//     console.log(" The best : " , language)
// }

// '', 0, nuul, undefined, NaN,false
console.log(Boolean(''))  //false
console.log(Boolean(' ')) //true
console.log(Boolean('Hello')) //true
console.log(Boolean('0')) //true
console.log(Boolean(0)) //false
console.log(Boolean(null)) // false
console.log(Boolean([])) //true
console.log(Boolean({})) //true 
console.log(Boolean(function() {})) //true 
