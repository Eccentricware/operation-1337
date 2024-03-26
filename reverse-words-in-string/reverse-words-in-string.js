"use strict";
function reverseWords(s) {
    return s.split(' ').reverse().join(' ').trim().replace(/\s+/g, ' ');
}
;
