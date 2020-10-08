function multiples(target, multiples1, multiples2) {
    const arr = new Array();
    let i = 0;

    while (i < target) {
        if (i % multiples1 === 0 || i % multiples2 === 0) {
            arr.push(i);
        }
        i++;
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // Assign to a variable directly with the function
    /*let sumArr = arr.reduce((a, b) => {
        return a + b;
    }, 0);
    */

    return arr.reduce(reducer, 0);
}

multiples(1000, 3, 5);

// Uncomment below line to see the result in the Terminal
// console.log(multiples(1000, 3, 5));