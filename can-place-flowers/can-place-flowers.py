from math import ceil
from typing import List


class Solution:
  def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    emptySpans = []
    currentSpan = 0
    for x in range(0, len(flowerbed)):
      if flowerbed[x] == 0:
        currentSpan += 1
        if x == 0:
          currentSpan += 1
        if x == len(flowerbed) - 1:
          currentSpan += 1
      else:
        if currentSpan > 2:
          emptySpans.append(currentSpan)
        currentSpan = 0

    if currentSpan > 2:
      emptySpans.append(currentSpan)

    capacity = 0
    for emptySpan in emptySpans:
      capacity += ceil(emptySpan / 2) - 1

    return capacity >= n
  
test = Solution
print(test.canPlaceFlowers(test, [1,0,0,0,0,0,1], 3))
print(test.canPlaceFlowers(test, [1,0,1,0,1,0,1], 1))
# 0: 0
# 1: 0
# 2: 0
# 3: 1
# 4: 1
# 5: 2
# 6: 2
# 7: 3
