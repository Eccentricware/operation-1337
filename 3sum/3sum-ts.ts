function threeSum(nums: number[]): number[][] {
  const triplets: number[][] = [];
  const tripletSignatures = new Set<string>([]);

  // const sortedNums = nums.sort((a, b) => a - b);

  for (let lowIndex = 0; lowIndex < nums.length - 2; lowIndex++) {
    for (let highIndex = nums.length - 1; highIndex > lowIndex + 1; highIndex--) {
      for (let midIndex = lowIndex + 1; midIndex < highIndex; midIndex++) {

        if (!tripletSignatures.has([nums[lowIndex], nums[midIndex], nums[highIndex]].sort((a, b) => a - b).join(','))
          // && !(lowIndex === midIndex || lowIndex === highIndex || midIndex === highIndex)
          && nums[lowIndex] + nums[midIndex] + nums[highIndex] === 0
        ) {
          tripletSignatures.add([nums[lowIndex], nums[midIndex], nums[highIndex]].sort((a, b) => a - b).join(','));
          triplets.push([nums[lowIndex], nums[midIndex], nums[highIndex]].sort((a, b) => a - b));
        }
      }
    }
  }
  
  return triplets;
};

console.log('Input:', [-1,0,1,2,-1,-4]);
console.log('Expected:', [[-1,-1,2],[-1,0,1]]);
console.log('Actual:  ', threeSum([-1,0,1,2,-1,-4]));

console.log('Input:', [0,1,1]);
console.log('Expected:', []);
console.log('Actual:  ', threeSum([0,1,1]));

console.log('Input:', [0,0,0]);
console.log('Expected:', [[0,0,0]]);
console.log('Actual:  ', threeSum([0,0,0]));

console.log('Input:', [3,0,-2,-1,1,2]);
console.log('Expected:', [[-2,-1,3],[-2,0,2],[-1,0,1]]);
console.log('Actual:  ', threeSum([3,0,-2,-1,1,2]));


// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.