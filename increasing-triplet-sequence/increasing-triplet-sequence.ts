function increasingTriplet(nums: number[]): boolean {
  let tripletFound = false;
  let lowest1 = nums[0];
  let lowest2 = undefined;

  let index = 1;
  while (index < nums.length && !tripletFound) {
    const num = nums[index];

    if (lowest2) {
      if (num > lowest2[1]) {
        tripletFound = true;

      } else if (num < lowest1) {
        lowest1 = num;

      } else if (num < lowest2[1] && num > lowest1) {
        lowest2 = [lowest1, num];
      }

    } else if (num > lowest1) {
      lowest2 = [lowest1, num];
    } else if (num < lowest1) {
      lowest1 = num;
    }

    index++;
  }

  return tripletFound;
};

console.log(increasingTriplet([1,5,0,4,1,3]));
console.log(increasingTriplet([5,1,5,5,2,5,4]));
console.log(increasingTriplet([1,2,1,2,1,2,1,2,1,2]));
console.log(increasingTriplet([20,100,10,12,5,13]));