function largestAltitude(gain: number[]): number {
  let greatestAltitude = 0;
  let runningAltitude = 0;

  gain.forEach((change: number) => {
    runningAltitude += change;
    if (runningAltitude > greatestAltitude) {
      greatestAltitude = runningAltitude;
    }
  });

  return greatestAltitude;
};

console.log('[-5,1,5,0,-7] should be 1:', largestAltitude([-5,1,5,0,-7]));
console.log('[-4,-3,-2,-1,4,3,2] should be 0:', largestAltitude([-4,-3,-2,-1,4,3,2]));

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.