const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const monthCodes = {
    January: 1,
    February: 4,
    March: 4,
    April: 0,
    May: 2,
    June: 5,
    July: 0,
    August: 3,
    September: 6,
    October: 1,
    November: 4,
    December: 6,
};

const monthDayCount = {
    January: {
        Min: 0, 
        Max: 31,
    },
    February: {
        Min: 32,
        Max: 59,
    },
    March: {
        Min: 60,
        Max: 90,
    },
    April: {
        Min: 91,
        Max: 120,
    },
    May: {
        Min: 121,
        Max: 151,
    },
    June: {
        Min: 152,
        Max: 181,
    },
    July: {
        Min: 182,
        Max: 212,
    },
    August: {
        Min: 213,
        Max: 243,
    },
    September: {
        Min: 244,
        Max: 273,
    },
    October: {
        Min: 274,
        Max: 304,
    },
    November: {
        Min: 305,
        Max: 334,
    },
    December: {
        Min: 335,
        Max: 365,
    },
}

const dayCodes = {
    Saturday: 0,
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
};

module.exports = {months, monthCodes, monthDayCount, dayCodes}