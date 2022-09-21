const readlineSync = require('readline-sync');
const dateConstants = require('./dateConstants')
const labTwo = require('./lab-two.js');

const months = dateConstants.months;

const onInvalidInput = type => {
    console.log("Your input is invalid. Please try again.");
    askQuestion(type);
};

const askQuestion = type => {
    let value;

    if (type == "year") {
        value = readlineSync.question("What year? ");
    } else if (type == "month") {
        value = readlineSync.question("What month? ");
    } else if (type == "day") {
        value = readlineSync.question("What day? ");
    } else {
        console.warn(`${type} is not a valid type.`)
        return 0;
    }

    if (type == "year" || type == "day") {
        if (isNaN(Number(value))) {
            onInvalidInput(type);
        }
    }

    
};

const getDayOfTheWeekForUserDate = () => {
    let year = 
    if (isNaN(Number(year))) {
        year = readlineSync.question("The value you have entered is not an integer. What year? ");
    }
    let month = 

    const lowerCaseMonth = month.toLowerCase() // get lowercase version of month
    let formattedMonth = lowerCaseMonth.charAt(0).toUpperCase() + lowerCaseMonth.slice(1); // capitalize first letter in lowercase month

    if (!months.includes(formattedMonth)) {
        month = readlineSync.question("The value you have entered is not a month. What month? ")
    }

    let day = 
    if (isNaN(Number(day))) {
        year = readlineSync.question("The value you have entered is not an integer. What day? ");
    }

    const weekday = labTwo.getDayOfTheWeek(Number(year), month, Number(day));
    
    console.log(`It is ${weekday} on ${month} ${day}, ${year}.`);
};


getDayOfTheWeekForUserDate();