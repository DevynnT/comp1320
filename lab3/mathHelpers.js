const squareRoot = (num) => Math.sqrt(num);

const square = (num) => num * num;

const distance = (numX1, numY1, numX2, numY2) => {
    const squaredResult = square(numX2 - numX1) + square(numY2 - numY1);

    return squareRoot(squaredResult);
};

module.exports = { distance };