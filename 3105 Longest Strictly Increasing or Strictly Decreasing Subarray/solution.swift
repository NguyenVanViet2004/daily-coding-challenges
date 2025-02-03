/*
    Difficult: Easy
    ----------------------------------------------------------------
    You are given an array of integers nums. Return the length of the longest subarray (A subarray is a contiguous non-empty sequence of elements within an array.)
    of nums which is either strictly increasing (An array is said to be strictly increasing if each element is strictly greater than its previous one (if exists).)
    or strictly decreasing.



    Example 1:

    Input: nums = [1,4,3,3,2]
    Output: 2
    Explanation:
    ----------------------------------------------------------------
    The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4]. The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
    Hence, we return 2.

    Example 2:
    Input: nums = [3,3,3,3]
    Output: 1
    Explanation:
    ----------------------------------------------------------------
    The strictly increasing subarrays of nums are [3], [3], [3], and [3]. The strictly decreasing subarrays of nums are [3], [3], [3], and [3]. Hence, we return 1.

    Example 3:
    Input: nums = [3,2,1]
    Output: 3
    Explanation:
    ----------------------------------------------------------------
    The strictly increasing subarrays of nums are [3], [2], and [1]. The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1]. Hence, we return 3.

    Constraints:

    1 <= nums.length <= 50
    1 <= nums[i] <= 50
*/

import Foundation

class Solution {
    func longestMonotonicSubarray(_ nums: [Int]) -> Int {
        guard !nums.isEmpty else { return 0 }

        var maxLength: Int = 1
        var incLength: Int = 1
        var decLength: Int = 1

        for i: Int in 1..<nums.count {
            if nums[i] > nums[i - 1] {
                incLength += 1
                decLength = 1
            } else if nums[i] < nums[i - 1] {
                decLength += 1
                incLength = 1
            } else {
                incLength = 1
                decLength = 1
            }

            maxLength = max(maxLength, max(incLength, decLength))
        }

        return maxLength
    }
}
