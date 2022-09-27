const process = require('process');
const fs = require('fs');
const mathHelpers = require('./mathHelpers.js');

const originalDirName = "dataPoints";
const pointsPath = "/points.txt";
const formattedArgs = process.argv.slice(2); // remove the first 2 args as they are uneeded

const appendToFile = (dirName, appendData) => {
    fs.appendFile(dirName + pointsPath, "\n" + appendData, (err) => {
        if (err) {
            console.log(err);
        }
    })
};

const writeToDir = (dirName, saveData, appendData) => {
    fs.writeFile(dirName + pointsPath, saveData, "utf-8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Content saved");

            appendToFile(dirName, appendData);
        }
    })
};

const createDir = (dirName, saveData, appendData) => {
    fs.mkdir(dirName, (err) => {
        if (err) {
            const newDirName = "temp_" + err.path;

            console.log(`Folder ${dirName} already exists. Creating a new folder for you called ${newDirName}`)

            createDir(newDirName, saveData, appendData);
        } else {
            writeToDir(dirName, saveData, appendData);
        }
    })
};

const processInput = (args, dirName) => {
    const point1 = `${args[0]},${args[1]}`;
    const point2 = `${args[2]},${args[3]}`;
    const calculatedDistance = mathHelpers.distance(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3])); // the elements inside args are strings so convert to integer
    const appendData = `The distance between your two points: (${point1}), (${point2}) is ${calculatedDistance}`;
    const saveData = `User Input: ${args[0]} ${args[1]} ${args[2]} ${args[3]}`;

    createDir(dirName, saveData, appendData);
};

if (formattedArgs.length == 4) {
    let valid = true;

    for (const element of formattedArgs) {
        if (isNaN(parseInt(element))) { // if arg isnt a number
            console.log(`${element} is not a number, please try again`);

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