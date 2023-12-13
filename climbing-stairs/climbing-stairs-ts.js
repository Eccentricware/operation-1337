"use strict";
function climbStairs(n) {
    // Contraints: 1 <= n <= 45
    let possibilities = 1;
    const maxDoubles = Math.floor(n / 2);
    if (n > 1) {
        let doubleSteps = 1;
        while (doubleSteps <= maxDoubles) {
            possibilities += getCombinationCount(n, doubleSteps);
            doubleSteps++;
        }
    }
    return possibilities;
}
;
function getCombinationCount(stairCount, doubleCount) {
    const positions = stairCount - doubleCount;
    let permutations = 1;
    let doubleCountChecked = 0;
    while (doubleCountChecked < doubleCount) {
        permutations *= positions - doubleCountChecked;
        doubleCountChecked++;
    }
    return permutations;
}
const climbStairsResult_1 = climbStairs(1);
console.assert(climbStairsResult_1 === 1, `Result: ${climbStairsResult_1} | Expected: 1`);
const climbStairsResult_2 = climbStairs(2);
console.assert(climbStairsResult_2 === 2, `Result: ${climbStairsResult_2} | Expected: 2`);
const climbStairsResult_3 = climbStairs(3);
console.assert(climbStairsResult_3 === 3, `Result: ${climbStairsResult_3} | Expected: 3`);
const climbStairsResult_4 = climbStairs(4);
console.assert(climbStairsResult_4 === 5, `Result: ${climbStairsResult_4} | Expected: 5`);
const climbStairsResult_5 = climbStairs(5);
console.assert(climbStairsResult_5 === 8, `Result: ${climbStairsResult_5} | Expected: 8`);
console.log('1', climbStairsResult_1);
console.log('2', climbStairsResult_2);
console.log('3', climbStairsResult_3);
