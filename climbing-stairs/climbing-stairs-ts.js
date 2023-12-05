"use strict";
function climbStairs(n) {
    const possibilities = [];
    addStep(possibilities, '', 0, n, false);
    if (n > 1) {
        addStep(possibilities, '', 0, n, true);
    }
    return possibilities.length;
}
;
function addStep(possibilities, steps, total, target, addDoubleStep) {
    const newSteps = steps + (addDoubleStep ? '2' : '1');
    const newTotal = total + (addDoubleStep ? 2 : 1);
    if (newTotal === target) {
        possibilities.push(newSteps);
    }
    if (newTotal + 1 <= target) {
        addStep(possibilities, newSteps, newTotal, target, false);
    }
    if (newTotal + 2 <= target) {
        addStep(possibilities, newSteps, newTotal, target, true);
    }
}
const climbStairsResult_1 = climbStairs(1);
console.assert(climbStairsResult_1 === 1, `Result: ${climbStairsResult_1} | Expected: 1`);
const climbStairsResult_2 = climbStairs(2);
console.assert(climbStairsResult_2 === 2, `Result: ${climbStairsResult_2} | Expected: 2`);
const climbStairsResult_3 = climbStairs(3);
console.assert(climbStairsResult_3 === 3, `Result: ${climbStairsResult_3} | Expected: 3`);
const climbStairsResult_4 = climbStairs(4);
console.assert(climbStairsResult_4 === 5, `Result: ${climbStairsResult_4} | Expected: 5`);
console.log('1', climbStairsResult_1);
console.log('2', climbStairsResult_2);
console.log('3', climbStairsResult_3);
console.log('4', climbStairsResult_4);
