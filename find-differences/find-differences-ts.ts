function findDifference(nums1: number[], nums2: number[]): number[][] {
  const onlyIn1: number[] = [];
  const onlyIn2: number[] = [];

  const set1: Set<number> = new Set();
  const set2: Set<number> = new Set();

  const inArray1: Set<number> = new Set();
  const inArray2: Set<number> = new Set();

  nums1.forEach((num: number) => set1.add(num));
  nums2.forEach((num: number) => set2.add(num));

  nums1.forEach((num: number) => {
    if (set1.has(num) && !set2.has(num) && !inArray1.has(num)) {
      onlyIn1.push(num);
      inArray1.add(num);
    }
  });

  nums2.forEach((num: number) => {
    if (set2.has(num) && !set1.has(num) && !inArray2.has(num)) {
      onlyIn2.push(num);
      inArray2.add(num);
    }
  });

  return [onlyIn1, onlyIn2];
};