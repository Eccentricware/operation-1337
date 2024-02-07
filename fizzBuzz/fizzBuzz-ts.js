"use strict";
function fizzBuzz(n) {
    const answer = [];
    let currentNumber = 1;
    while (currentNumber <= n) {
        if (currentNumber % 15 === 0) {
            answer.push('FizzBuzz');
        }
        else if (currentNumber % 5 === 0) {
            answer.push('Buzz');
        }
        else if (currentNumber % 3 === 0) {
            answer.push('Fizz');
        }
        else {
            answer.push(String(currentNumber));
        }
        currentNumber++;
    }
    return answer;
}
;
console.log('Input: 3');
console.log('Expected:', ["1", "2", "Fizz"]);
console.log('Actual:  ', fizzBuzz(3));
console.log('Input: 5');
console.log('Expected:', ["1", "2", "Fizz", "4", "Buzz"]);
console.log('Actual:  ', fizzBuzz(5));
console.log('Input: 15');
console.log('Expected:', ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
console.log('Actual:  ', fizzBuzz(15));
