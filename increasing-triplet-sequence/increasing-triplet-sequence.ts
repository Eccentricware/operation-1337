function increasingTriplet(nums: number[]): boolean {
  let triplets: number[][] = [];
  let tripletFound = false;

  let numIndex = 0;
  while (numIndex < nums.length && !tripletFound) {
    let number = nums[numIndex];
    triplets.forEach((triplet: number[]) => {
      if (number > triplet[triplet.length - 1]) {
        let newTriplet = triplet.slice();
        newTriplet.push(number);
        if (newTriplet.length === 3) {
          tripletFound = true;
        } else {
          triplets.push(newTriplet);
        }
      }
    });
    triplets.push([number]);
    numIndex++;
  }

  return tripletFound;
};

console.log(increasingTriplet([1,5,0,4,1,3]));