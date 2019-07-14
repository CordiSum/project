var money = +prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// ==== первый вид цикла
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
    let b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a) ) === 'string' && (typeof(a)) != null 
    && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
    }    
};
// ======================
// ==== второй вид цикла 
// let i = 0;
// while ( i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
//     let b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a) ) === 'string' && (typeof(a)) != null 
//     && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log ("bad result");
//         i--;
//     } 

//     i++;
// };
// =======================
// ==== третий вид цикла
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?", "");
//     let b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a) ) === 'string' && (typeof(a)) != null 
//     && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log ("bad result");
//         i--;
//     } 

//     i++;
// } while ( i < 2 );
// =======================

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if ( appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}