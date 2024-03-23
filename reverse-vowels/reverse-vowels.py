from math import floor
from typing import List


class Solution:
  def reverseVowels(self, s: str) -> str:
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    vowelIndices = []

    for x in range(0, len(s)):
      if s[x] in vowels:
        vowelIndices.append(x)

    for x in range(0, floor(len(vowelIndices) / 2)):
      leftIndex = vowelIndices[x]
      rightIndex = vowelIndices[len(vowelIndices) - 1 - x]
      charForLeft = s[rightIndex]
      charForRight = s[leftIndex]

      s = s[:leftIndex] + charForLeft + s[leftIndex + 1:]
      s = s[:rightIndex] + charForRight + s[rightIndex + 1:]

    return s

test = Solution
print('spite')
print(test.reverseVowels(test, 'spite'))
print('arise')
print(test.reverseVowels(test, 'arise'))
print('rush')
print(test.reverseVowels(test, 'rush'))
print('a')
print(test.reverseVowels(test, 'a'))
print('my')
print(test.reverseVowels(test, 'my'))