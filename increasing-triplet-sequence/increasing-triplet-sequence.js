"use strict";
function increasingTriplet(nums) {
    let triplets = [];
    let tripletFound = false;
    let numIndex = 0;
    while (numIndex < nums.length && !tripletFound) {
        let number = nums[numIndex];
        triplets.forEach((triplet) => {
            if (number > triplet[triplet.length - 1]) {
                let newTriplet = triplet.slice();
                newTriplet.push(number);
                if (newTriplet.length === 3) {
                    tripletFound = true;
                }
                else {
                    triplets.push(newTriplet);
                }
            }
        });
        triplets.push([number]);
        numIndex++;
    }
    return tripletFound;
}
;
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));
