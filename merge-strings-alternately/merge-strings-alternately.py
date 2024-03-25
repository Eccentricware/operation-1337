class Solution:
  def mergeAlternately(self, word1: str, word2: str) -> str:
    output = ''
    trustWord1 = len(word1) >= len(word2)
    if trustWord1:
      for x in range(0, len(word1)):
        output = output + word1[x]
        if x < len(word2):
          output = output + word2[x]
    else:
      for x in range(0, len(word2)):
        if x < len(word1):
          output = output + word1[x]
        output = output + word2[x]

    return output

s = Solution
print(s.mergeAlternately(s, 'abc', 'pqr'))
print("apbqcr")
print(s.mergeAlternately(s, 'ab', 'pqrs'))
print("apbqrs")
print(s.mergeAlternately(s, 'abcd', 'pq'))
print("apbqcd")
