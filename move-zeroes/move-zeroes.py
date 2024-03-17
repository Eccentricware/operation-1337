from typing import List

class Solution:
  def moveZeroes(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    edit_index = 0
    search_index = 0
    zero_count = 0
    while edit_index < len(nums):
      if search_index == len(nums):
        nums[edit_index] = 0
        edit_index += 1
      else:
        if nums[search_index] != 0:
          nums[edit_index] = nums[search_index]
          edit_index += 1
        search_index += 1

test = Solution()
list = [0,1,0,3,12] 
print(list)
test.moveZeroes(list)
print(list)