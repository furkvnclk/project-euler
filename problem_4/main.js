function palindrome() {
    const arr = new Array();
    for (let i = 100; i < 999; i++) {
        for (let j = 100; j < 999; j++) {
            let number = i * j;
            let stringNumber = number.toString();
            let reversedStringNumber = stringNumber.split('').reverse().join('');
            if (stringNumber === reversedStringNumber) {
                arr.push(number);
            }
        }
    }
    return Math.max(...arr);
}

palindrome();
console.log(palindrome());