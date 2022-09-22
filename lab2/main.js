const readlineSync = require('readline-sync');
const dateConstants = require('./dateConstants')
const labTwo = require('./lab-two.js');

const months = dateConstants.months;

const onInvalidInput = (type, value) => {
    if (type == "year") {
        console.log(`${value} is not a valid year.`);
    } else if (type == "month") {
        console.log(`${value} is not a valid month.`);
    } else if (type == "day") {
        console.log(`${value} is not a valid day.`);
    }

    return askQuestion(type);
};

const askQuestion = type => {
    let value;

    if (type == "year") {
        value = readlineSync.question("What year? ");
    } else if (type == "month") {
        value = readlineSync.question("What month? ");
    } else if (type == "day") {
        value = readlineSync.question("What day? ");
    }

    if (type == "year") {
        let valueInNumber = Number(value);

        while (isNaN(valueInNumber) || valueInNumber % 1 != 0) { // if value isnt a number or value has a decimal
            value = onInvalidInput(type, value);
            valueInNumber = Number(value);
        }
        
        value = valueInNumber; // removes leading 0s if there are any

    } else if (type == "month") {
        let lowerCaseMonth = value.toLowerCase(); // get lowercase version of month
        let formattedMonth = lowerCaseMonth.charAt(0).toUpperCase() + lowerCaseMonth.slice(1); // capitalize first letter in lowercase month
        
        while (!months.includes(formattedMonth)) { // if it's not a valid month
            value = onInvalidInput(type, value);

            lowerCaseMonth = value.toLowerCase();
            formattedMonth = lowerCaseMonth.charAt(0).toUpperCase() + lowerCaseMonth.slice(1);
        }

        value = formattedMonth;

    } else if (type == "day") {
        let valueInNumber = Number(value);

        while (isNaN(valueInNumber) || valueInNumber <= 0 || valueInNumber > 31 || valueInNumber % 1 != 0) { // if value isnt a number or value has a decimal
            value = onInvalidInput(type, value);
            valueInNumber = Number(value);
        }

        value = valueInNumber; // removes leading 0s if there are any
    }

    return value;
};

const getDayOfTheWeekForUserDate = () => {
    const year = askQuestion("year");
    const month = askQuestion("month");
    const day = askQuestion("day");

    const weekday = labTwo.getDayOfTheWeek(Number(year), month, Number(day));
    
    console.log(`It is ${weekday} on ${month} ${day}, ${year}.`);
};


getDayOfTheWeekForUserDate();