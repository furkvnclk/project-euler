var fibSumEven = (limit) => {
    let previous = 0;
    let current = 1;
    let sum = 0;
    let next;

    for (current; current <= limit;) {
        next = current + previous;
        previous = current;

        if (current % 2 === 0) {
            sum += current;
        }

        current = next;
    }

    return sum;
}

fibSumEven(4000000);

// Uncomment the line below to see the result in console 
// console.log(fibSumEven(4000000));