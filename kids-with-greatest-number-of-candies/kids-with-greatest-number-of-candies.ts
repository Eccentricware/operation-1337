function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let currentMax = 0;
  candies.forEach((candyCount: number) => {
    currentMax = candyCount > currentMax ? candyCount : currentMax;
  });

  const canHaveMax = candies.map((candyCount: number) => 
    candyCount + extraCandies >= currentMax
  );

  return canHaveMax;
};