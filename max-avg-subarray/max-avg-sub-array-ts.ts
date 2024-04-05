function findMaxAverage(nums: number[], k: number): number {
  let maxSum = nums.slice(0, k)
    .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);

  let outIndex = 0;
  let nextIndex = k;
  let runningSum = maxSum;
  while (nextIndex < nums.length) {
    runningSum += nums[nextIndex];
    runningSum -= nums[outIndex];

    if (runningSum > maxSum) {
      maxSum = runningSum;
    }

    nextIndex++;
    outIndex++;
  }

  return maxSum / k;
};

console.log(findMaxAverage([5], 1), ' Should be 5')
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 'should be 12.75')