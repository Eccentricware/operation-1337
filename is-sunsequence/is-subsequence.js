"use strict";
function isSubsequence(s, t) {
    if (s === '') {
        return true;
    }
    if (t === '') {
        return false;
    }
    let subSequenceFound = false;
    for (let searchIndex = 0; searchIndex < t.length; searchIndex++) {
        let subStringIndex = 0;
        if (t[searchIndex] === s[0] && !subSequenceFound) {
            for (let targetStringIndex = searchIndex; targetStringIndex < t.length; targetStringIndex++) {
                if (s[subStringIndex] === t[targetStringIndex]) {
                    if (subStringIndex === s.length - 1) {
                        subSequenceFound = true;
                    }
                    else {
                        subStringIndex++;
                    }
                }
            }
        }
    }
    return subSequenceFound;
}
;
console.log('abc in ahbgdc ? true ', isSubsequence('abc', 'ahbgdc'));
console.log('axc in ahbgdc ? false ', isSubsequence('axc', 'ahbgdc'));
console.log('aaaaaa in bbaaaa ? false ', isSubsequence('aaaaaa', 'bbaaaa'));
