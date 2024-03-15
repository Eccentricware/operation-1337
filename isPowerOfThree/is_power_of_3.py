class Solution:
  def isPowerOfThree(n: int) -> bool:
    nextPower3 = 1

    while nextPower3 < n:
      nextPower3 = nextPower3 * 3

    return nextPower3 == n
  
s = Solution
print(s.isPowerOfThree(27))
print(s.isPowerOfThree(0))
print(s.isPowerOfThree(-1))