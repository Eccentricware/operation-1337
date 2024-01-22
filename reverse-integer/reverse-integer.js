"use strict";
function reverse(x) {
    const stringified = String(x);
    let isNegative = stringified[0] === '-';
    let reversed = '';
    for (let index = isNegative ? 1 : 0; index < stringified.length; index++) {
        reversed = stringified[index] + reversed;
    }
    let final = isNegative ? Number(reversed) * -1 : Number(reversed);
    return (final < Math.pow(2, 31) - 1 && final > -1 * Math.pow(2, 31))
        ? final
        : 0;
}
;
console.log(`Input: 123 | Expected: 321 | Actual: ${reverse(123)}`);
console.log(`Input: -123 | Expected: -321 | Actual: ${reverse(-123)}`);
console.log(`Input: 120 | Expected: 21 | Actual: ${reverse(120)}`);
console.log(`Input: 1534236469 | Expected: 0 | Actual: ${reverse(1534236469)}`);
// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21
