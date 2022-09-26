const process = require('process');
const fs = require('fs');
const mathHelpers = require('./mathHelpers.js');

const originalDirName = "dataPoints";
const formattedArgs = process.argv.slice(2); // remove the first 2 args as they are uneeded

const checkDir = (dirName) => {
    let returnedDirName = dirName;

    if (fs.existsSync(dirName)) {
        const newDirName = "temp_" + dirName;

        console.log(`Folder ${dirName} already exists. Creating a new folder for you called ${newDirName}`);

        returnedDirName = checkDir(newDirName);

        return returnedDirName;
    } else {
        return returnedDirName;
    }
};

const processInput = (args, dirName) => {
    const point1 = `${args[0]},${args[1]}`;
    const point2 = `${args[2]},${args[3]}`;
    const calculatedDistance = mathHelpers.distance(parseInt(args[0]), parseInt(args[2]), parseInt(args[1]), parseInt(args[3])); // the elements inside args are strings so convert to integer

    console.log(`The distance between your two points: (${point1}), (${point2}) is ${calculatedDistance}`);

    const newDirName = checkDir(dirName);
    console.log(newDirName);

    fs.mkdir("./" + newDirName, (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile(newDirName + "/points.txt", String(calculatedDistance), "utf-8", (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Content saved")
                }
            })
        }
    })
};

if (formattedArgs.length == 4) {
    processInput(formattedArgs, originalDirName);
} else {
    console.log("You did provided too many or not enough arguments.")
}