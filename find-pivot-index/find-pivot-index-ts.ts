function pivotIndex(nums: number[]): number {
  let lSum = 0;
  let rSum = nums.reduce((prev: number, curr: number) => prev + curr, 0);
  let pIndex = -1;

  nums.forEach((num: number, index: number) => {
    rSum -= num;
    if (index > 0) {
      lSum += nums[index - 1];
    }

    if (lSum === rSum && pIndex === -1) {
      pIndex = index;
    }
  });

  return pIndex;
};