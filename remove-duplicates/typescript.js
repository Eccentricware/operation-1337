"use strict";
function removeDuplicates(nums) {
    if (nums.length === 1) {
        return 1;
    }
    let workerIndex = 0;
    let reachIndex = 1;
    while (reachIndex < nums.length) {
        if (workerIndex === reachIndex) {
            reachIndex++;
        }
        else if (nums[workerIndex] === nums[reachIndex]) {
            nums[reachIndex] = NaN;
            reachIndex++;
        }
        else {
            workerIndex++;
            nums[workerIndex] = nums[reachIndex];
        }
    }
    return workerIndex + 1;
}
;
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
