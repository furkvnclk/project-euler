let sumSqu = 0;
let squSum = 0;

function sumSquareDiff(n) {
    return squareOfSum(n) - sumOfSquare(n);
}

// Helper function
function sumOfSquare(n) {
    for (let i = 1; i <= n; i++) {
        let squredI = Math.pow(i, 2);
        sumSqu += squredI;
    }

    return sumSqu;
}

// Helper function
function squareOfSum(n) {
    for (let i = 1; i <= n; i++) {
        squSum += i;
    }
    let result = Math.pow(squSum, 2);
    return result
}

sumSquareDiff(100)

// console.log(sumSquareDiff(100));