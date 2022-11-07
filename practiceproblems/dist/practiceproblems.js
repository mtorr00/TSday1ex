"use strict";
function reverseString(a) {
    let answer = a.split("").reverse().join("");
    return answer;
}
console.log(reverseString("Thirteen Fourteen Fifteen"));
function fibonacciNth(a) {
    let [x, y] = [0, 1];
    while (a-- > 0) {
        [x, y] = [y, x + y];
    }
    return y;
}
console.log(fibonacciNth(40));
function palindromeString(a) {
    if (a.split("").reverse().join("") == a) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindromeString("Turkey"));
console.log(palindromeString("racecar"));
function palindromeNumber(a) {
    if (a.toString().split("").reverse().join("") == a.toString()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindromeNumber(400));
console.log(palindromeNumber(404));
function isLeapYear(a) {
    if (a % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
function findPrimeNumber(a) {
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(findPrimeNumber(7));
console.log(findPrimeNumber(9));
//# sourceMappingURL=practiceproblems.js.map