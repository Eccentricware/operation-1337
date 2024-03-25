"use strict";
function mergeAlternately(word1, word2) {
    let output = '';
    const trustWord1 = word1.length >= word2.length;
    if (trustWord1) {
        for (let index = 0; index < word1.length; index++) {
            output += word1[index];
            if (word2[index]) {
                output += word2[index];
            }
        }
    }
    else {
        for (let index = 0; index < word2.length; index++) {
            if (word1[index]) {
                output += word1[index];
            }
            output += word2[index];
        }
    }
    return output;
}
;
console.log('Input', "abc", "pqr");
console.log('Expected', 'apbqcr');
console.log('Result', mergeAlternately('abc', 'pqr'));
console.log('--');
console.log('Input', "ab", "pqrs");
console.log('Expected', 'apbqrs');
console.log('Result', mergeAlternately("ab", "pqrs"));
console.log('--');
console.log('Input', "abcd", "pq");
console.log('Expected', 'apbqcd');
console.log('Result', mergeAlternately("abcd", "pq"));
