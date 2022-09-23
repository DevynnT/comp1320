const process = require('process');
const fs = require('fs');
const mathHelpers = require('./mathHelpers.js');

const directory = "./dataPoints";
const formattedArgs = process.argv.slice(2); // remove the first 2 args as they are uneeded

const processInput = (args) => {
    const point1 = `${args[0]},${args[1]}`;
    const point2 = `${args[2]},${args[3]}`;
    const calculatedDistance = mathHelpers.distance(parseInt(args[0]), parseInt(args[2]), parseInt(args[1]), parseInt(args[3])); // the elements inside args are strings so convert to integer

    console.log(`The distance between your two points: (${point1}), (${point2}) is ${calculatedDistance}`);

    fs.mkdir(directory, (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile(directory + "./points.txt", "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Content saved")
                }

                fs.appendFile(directory + "./points.txt", data, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
        }
    })
};

if (formattedArgs.length == 4) {
    processInput(formattedArgs);
} else {
    console.log("You did provided too many or not enough arguments.")
}