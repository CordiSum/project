var money = prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {

    budget: money;
    timeData: time;
    expenses: {
        askExpenses: prompt( "Введите обязательную статью расходов в этом месяце?");
        aksOptionalExpenses: prompt( "Во сколько обойдется?");
    };

    optionalExpenses: {};
    income: [];
    savings: false;

}

alert("Ваш бюджет на день составит:" + (money/30) );