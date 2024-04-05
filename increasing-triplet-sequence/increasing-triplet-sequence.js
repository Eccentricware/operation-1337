"use strict";
function increasingTriplet(nums) {
    let triplets = [];
    let tripletFound = false;
    let signatures = [];
    const getSignature = (moreNums) => {
        return moreNums.join('|');
    };
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
                    const signature = getSignature(newTriplet);
                    if (!signatures.includes(signature)) {
                        triplets.push(newTriplet);
                        signatures.push(signature);
                    }
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
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));
