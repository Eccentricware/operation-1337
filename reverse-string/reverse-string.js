"use strict";
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    for (let leftIndex = 0, rightIndex = s.length - 1; leftIndex <= rightIndex; leftIndex++, rightIndex--) {
        const newLeft = s[rightIndex];
        const newRight = s[leftIndex];
        s[leftIndex] = newLeft;
        s[rightIndex] = newRight;
    }
}
;
let test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
reverseString(test);
console.log(test);
