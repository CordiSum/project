var money = prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
var answer1 = prompt("Введите обязательную статью расходов в этом месяце?", "");
var answer2 = prompt("Во сколько обойдется?", "");
var answer3 = prompt("Введите обязательную статью расходов в этом месяце?", "");
var answer4 = prompt("Во сколько обойдется?", "");

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;


alert("Ваш бюджет на день составит:" + (appData.budget/30) );