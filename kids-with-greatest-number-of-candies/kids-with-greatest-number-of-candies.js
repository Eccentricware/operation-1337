"use strict";
function kidsWithCandies(candies, extraCandies) {
    let currentMax = 0;
    candies.forEach((candyCount) => {
        currentMax = candyCount > currentMax ? candyCount : currentMax;
    });
    const canHaveMax = candies.map((candyCount) => candyCount + extraCandies >= currentMax);
    return canHaveMax;
}
;
