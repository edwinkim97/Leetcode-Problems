class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for i in range(0,length):
            for j in range(0,i):
                if nums[i] + nums[j] == target:
                    return [i,j]