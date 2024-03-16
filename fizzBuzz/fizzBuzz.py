from typing import List

class Solution:
  def fizzBuzz(self, n: int) -> List[str]:
    answer = []

    current_number = 1

    while current_number <= n:
      if current_number % 15 == 0:
        answer.append('FizzBuzz')
      elif current_number % 5 == 0:
        answer.append('Buzz')
      elif current_number % 3 == 0:
        answer.append('Fizz')
      else:
        answer.append(str(current_number))

      current_number = current_number + 1

    return answer

s = Solution
print(s.fizzBuzz(s, 3))
print(s.fizzBuzz(s, 5))
print(s.fizzBuzz(s, 15))