function climbStairs(n: number): number {
    // Max number of double steps is Math.floor(n / 2)
    // Number of singles is always n
    // Can always generate an array of singles
    // Can progress with arrays for iterations and strings for simpleer signature checks
    let possibilityCount = 0;
    const maxDoubles = Math.floor(n / 2);
    const stepOrders: Record<number, string[]> = {
      0: createSingleStepOrder(n)
    };

    if (n > 1) {
      processDoubles(stepOrders, 1, maxDoubles);
    }

    for (let stepOrder in stepOrders) {
      possibilityCount += stepOrders[stepOrder].length;
    }

    return possibilityCount;
};

function createSingleStepOrder(n: number): string[] {
  let order = '';

  while (order.length < n) {
    order += '1';
  }

  return [order];
}

function processDoubles(stepOrders: Record<number, string[]>, doubleCount: number, maxDoubles: number): void {
  stepOrders[doubleCount] = [];

  stepOrders[doubleCount - 1].forEach((stepOrder: string) => {
    for (let firstSingleIndex = 0; firstSingleIndex < stepOrder.length - 1; firstSingleIndex++) {
      for (let secondSingleIndex = firstSingleIndex + 1; secondSingleIndex < stepOrder.length; secondSingleIndex++) {
        if (stepOrder[firstSingleIndex] === '1' && stepOrder[secondSingleIndex] === '1') {
          const potentialAtFirst = stepOrder.slice(0, firstSingleIndex) + '2' + stepOrder.slice(firstSingleIndex + 1, secondSingleIndex) + stepOrder.slice(secondSingleIndex + 1);
          const potentialAtSecond = stepOrder.slice(0, firstSingleIndex) + stepOrder.slice(firstSingleIndex + 1, secondSingleIndex) + '2' + stepOrder.slice(secondSingleIndex + 1);
  
          if (!stepOrders[doubleCount].includes(potentialAtFirst)) {
            stepOrders[doubleCount].push(potentialAtFirst);
          }
  
          if (!stepOrders[doubleCount].includes(potentialAtSecond)) {
            stepOrders[doubleCount].push(potentialAtSecond);
          }
        }
      }
    }
  });

  if (doubleCount < maxDoubles) {
    processDoubles(stepOrders, doubleCount + 1, maxDoubles);
  }
}

const climbStairsResult_1 = climbStairs(1);
console.log(climbStairsResult_1);
const climbStairsResult_2 = climbStairs(2);
console.log(climbStairsResult_2);
const climbStairsResult_3 = climbStairs(3);
console.log(climbStairsResult_3);