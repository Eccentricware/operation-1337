"use strict";
function gcdOfStrings(str1, str2) {
    const findCDs = (str) => {
        let commonDivisors = [];
        for (let divLength = 1; divLength <= str.length; divLength++) {
            let divisor = str.slice(0, divLength);
            if (str.length % divisor.length === 0) {
                let combinedResult = '';
                while (combinedResult.length < str.length) {
                    combinedResult += divisor;
                }
                if (combinedResult === str) {
                    commonDivisors.push(divisor);
                }
            }
        }
        return commonDivisors;
    };
    const str1CDs = findCDs(str1);
    const str2CDs = findCDs(str2);
    let gcd = '';
    str1CDs.forEach((word) => {
        if (str2CDs.includes(word) && word.length > gcd.length) {
            gcd = word;
        }
    });
    return gcd;
}
