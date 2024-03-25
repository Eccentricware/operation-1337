function productExceptSelf(nums: number[]): number[] {
  let fullProduct = 1;

  let currentIndex = 0;
  let zeroCount = 0;
  while (currentIndex < nums.length && zeroCount < 2) {
    if (nums[currentIndex] === 0 && zeroCount === 0) {
      zeroCount++;
    } else if (nums[currentIndex] === 0) {
      fullProduct = 0;
      zeroCount++;
    } else {
      fullProduct *= nums[currentIndex];
    }
    currentIndex++;
  }

  let productExceptSelf: number[] = nums.map((num: number) => {
    if (zeroCount > 1) {
      return 0;
    } else if (zeroCount === 1 && num === 0) {
      return fullProduct;
    } else if (zeroCount === 1 && num !== 0) {
      return 0;
    } else {
      return fullProduct / num;
    }
  });

  return productExceptSelf;
};