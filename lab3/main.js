const process = require('process');
const fs = require('fs');
const mathHelpers = require('./mathHelpers.js');

const originalDirName = "dataPoints";
const pointsPath = "/points.txt";
const formattedArgs = process.argv.slice(2); // remove the first 2 args as they are uneeded

const writeToDir = (dirName, data) => {
    fs.writeFile(dirName + pointsPath, data, "utf-8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Content saved");
        }
    })
};

const createDir = (dirName, data) => {
    fs.mkdir(dirName, (err) => {
        if (err) {
            const newDirName = "temp_" + err.path;

            console.log(`Folder ${dirName} already exists. Creating a new folder for you called ${newDirName}.`)

            createDir(newDirName, data);
        } else {
            writeToDir(dirName, data);
        }
    })
};

const processInput = (args, dirName) => {
    const point1 = `${args[0]},${args[2]}`;
    const point2 = `${args[1]},${args[3]}`;
    const calculatedDistance = mathHelpers.distance(parseInt(args[0]), parseInt(args[2]), parseInt(args[1]), parseInt(args[3])); // the elements inside args are strings so convert to integer

    console.log(`The distance between your two points: (${point1}), (${point2}) is ${calculatedDistance}`);

    createDir(dirName, String(calculatedDistance));
};

if (formattedArgs.length == 4) {
    let valid = true;

    for (const element of formattedArgs) {
        if (isNaN(parseInt(element))) { // if arg isnt a number
            console.log(`${element} is not a number. Please try again.`);

            valid = false;

            break
        }
    }

    if (valid) {
        processInput(formattedArgs, originalDirName);
    }
} else {
    console.log("You provided too many or not enough arguments.")
}