"use strict";
function maxArea(height) {
    let mostWater = 0;
    for (let leftWallIndex = 0; leftWallIndex < height.length - 1; leftWallIndex++) {
        const minBase = Math.floor(mostWater / height[leftWallIndex]) + 1;
        for (let rightWallIndex = leftWallIndex + minBase; rightWallIndex < height.length; rightWallIndex++) {
            const shortWallHeight = height[leftWallIndex] <= height[rightWallIndex] ? height[leftWallIndex] : height[rightWallIndex];
            if (shortWallHeight * (rightWallIndex - leftWallIndex) > mostWater) {
                mostWater = shortWallHeight * (rightWallIndex - leftWallIndex);
            }
        }
    }
    return mostWater;
}
;
console.log('49', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
