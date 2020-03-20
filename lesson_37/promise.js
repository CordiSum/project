let drink = 1;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 1000) 
    })

    return promise;
}

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}
function loose() {
    console.log('Вы проиграли');
}

function buyBeer() {
    console.log('Вам купили пива');
}
function giveMoney() {
    console.log('Вам дали денег');
}

shoot({})
    .then(mark => console.log('вы попали в цель'))
    .then(win)
    .catch(loose)

// БЕЗ ПРОМИСОВ

// let drink = 1;

// function shoot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел...');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
//     }, 1000) 
// }

// function win() {
//     console.log('Вы победили');
//     (drink == 1) ? buyBeer() : giveMoney();
// }
// function loose() {
//     console.log('Вы проиграли');
// }

// function buyBeer() {
//     console.log('Вам купили пива');
// }
// function giveMoney() {
//     console.log('Вам дали денег');
// }

// shoot({}, 
//         function(mark) {
//             console.log('вы попали в цель');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose();
//         }
//     )