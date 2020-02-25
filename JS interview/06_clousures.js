// Замыкание это, когда функция имеет доступ к переменным из вышестоящего Scope
// Типа функция внутри функции

// function SayHelloTo(name) {
//     const message = 'Hello' + name

//     return function () {
//         console.log(message);
        
//     }
// } 

// const helloToElena = SayHelloTo('Elena')
// const helloToIgor = SayHelloTo('Igor')

// console.log(helloToElena);

// helloToElena()
// helloToIgor()

// ============================= Пример  применения

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fw.join(' '));            
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// // console.log(manager);
// manager.print()
// manager.add('Vue')
// manager.print()

// =========== SerTimeout

const fib = [1,2,3,5,8,13]

for (var i = 0; i < fib.length; i++) {
    setTimeout( function () {
        console.log(`fib[${i}] = ${fib[i]}`);        
    }, 1500)
}

