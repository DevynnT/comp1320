const dateConstants = require('./dateConstants.js');

const months = dateConstants.months;
const monthCodes = dateConstants.monthCodes;
const dayCodes = dateConstants.dayCodes;
const monthDayCount = dateConstants.monthDayCount;

// LINK: https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
const isLeapYear = year => ((year % 4 == 0 ) && (year % 100 != 0)) || (year % 400 == 0);

const getSpecialCases = (toModNum, year) => {
    const centuryDigits = Number(String(year).slice(0, 2)); // get the first two numbers in year

    let finalNumber = toModNum;

    if (isLeapYear(year)) {
        finalNumber -= 1;
    }

    if (centuryDigits == 16 || centuryDigits == 20) {
        finalNumber += 6;
    } else if (centuryDigits == 17 || centuryDigits == 21) {
        finalNumber += 4;
    } else if (centuryDigits == 18) {
        finalNumber += 2;
    }

    return finalNumber % 7;
};

const getDayOfTheWeek = (year, month, day) => {
    const lastTwoNumber = Number(String(year).slice(-2)); // gets the last two numbers of year

    const lastTweleve = Math.floor(lastTwoNumber / 12); // step 1
    const lastTwoRemainder = lastTwoNumber % 12; // step 2
    const lastTwoFourth = Math.floor(lastTwoRemainder / 4); // step 3
    const chosenMonthCode = monthCodes[month]; // step 4
    const toModNum = (lastTweleve + lastTwoRemainder + lastTwoFourth + chosenMonthCode + day) // step 5
    const chosenDayCode = getSpecialCases(toModNum, year); // step 6

    const chosenDay = Object.keys(dayCodes).find(key => dayCodes[key] == chosenDayCode); // get keys in object and use .find to find key associated with value
    return chosenDay;
}

const makeCalendar = () => {
    const year = 2022;

    for (let dayInYear = 1; dayInYear <= 365; dayInYear++) {// loop 365 days because there are 365 days in 2022
        let dayInMonth;

        for (const month in monthDayCount) {
            if (dayInYear >= monthDayCount[month].Min && dayInYear <= monthDayCount[month].Max) {
                if (month == "January") {
                    dayInMonth = dayInYear - monthDayCount[month].Min;
                } else {
                    dayInMonth = (dayInYear - monthDayCount[month].Min) + 1;
                }
                
               const weekday = getDayOfTheWeek(year, month, dayInMonth);

                console.log(`${month}-${dayInMonth}-${year} is a ${weekday}.`);

                break
            }
        }
    }
};


module.exports = {makeCalendar, getDayOfTheWeek};