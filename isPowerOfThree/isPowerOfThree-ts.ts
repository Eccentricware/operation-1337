function isPowerOfThree(n: number): boolean {
  let nextPower3 = 1;
  while (nextPower3 < n) {
    nextPower3 *= 3;
  }

  return nextPower3 === n;
};

console.log(`Is 27 a power of 3? ${isPowerOfThree(27)}`);
console.log(`Is 0 a power of 3? ${isPowerOfThree(0)}`);
console.log(`Is -1 a power of 3? ${isPowerOfThree(-1)}`);

// Example 1:
// Input: n = 27
// Output: true
// Explanation: 27 = 3^3

// Example 2:
// Input: n = 0
// Output: false
// Explanation: There is no x where 3^x = 0

// Example 3:
// Input: n = -1
// Output: false
// Explanation: There is no x where 3^x = (-1)