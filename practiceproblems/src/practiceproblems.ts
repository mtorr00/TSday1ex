function reverseString (a:string) {
    let answer:string = a.split("").reverse().join("");
    return answer;
}

console.log(reverseString("Thirteen Fourteen Fifteen"));

function fibonacciNth (a:number){
    let [x,y] = [0,1];
    while (a-- >0){
        [x,y] = [y, x+y];
    }
    return y;
}

console.log(fibonacciNth(40))

function palindromeString (a:string){
    if (a.split("").reverse().join("") == a){
        return true;
    }
    else {
        return false;
    }
}

console.log(palindromeString("Turkey"))
console.log(palindromeString("racecar"))

function palindromeNumber (a:number) {
    if (a.toString().split("").reverse().join("") == a.toString()){
        return true;
    }
    else {
        return false;
    }
}

console.log(palindromeNumber(400))
console.log(palindromeNumber(404))

function isLeapYear(a:number) {
    if(a % 4 == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2021))

function findPrimeNumber(a:number){
    if (a <= 1){
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0){
            return false;
        }
    }
    return true
}

console.log(findPrimeNumber(7))
console.log(findPrimeNumber(9))