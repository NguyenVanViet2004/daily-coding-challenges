/*
    Difficult: Easy
    ----------------------------------------------------------------
    An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

    You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.


    Example 1:

    Input: nums = [1]
    Output: true
    Explanation:
    ----------------------------------------------------------------
    There is only one element. So the answer is true.

    Example 2:

    Input: nums = [2,1,4]
    Output: true
    Explanation:
    ----------------------------------------------------------------
    There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

    Example 3:
    Input: nums = [4,3,1,6]
    Output: false
    Explanation:
    ----------------------------------------------------------------
    nums[1] and nums[2] are both odd. So the answer is false.

    Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100
*/

class Solution {
    func isArraySpecial(_ nums: [Int]) -> Bool {
        if nums.count == 1 {
            return true
        }

        for i: Int in 0..<nums.count - 1 {
            let current: Int = nums[i]
            let next: Int = nums[i + 1]

            if current % 2 == next % 2 {
                return false
            }
        }

        return true
    }
}
