/*
    Difficult: Medium
    ----------------------------------------------------------------
    Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d
    where a, b, c, and d are elements of nums, and a != b != c != d.

    Example 1:
    Input: nums = [2,3,4,6]
    Output: 8
    ----------------------------------------------------------------
    Explanation:
    There are 8 valid tuples:
    (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
    (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)


    Example 2:
    Input: nums = [1,2,4,5,10]
    Output: 16
    ----------------------------------------------------------------
    Explanation:
    There are 16 valid tuples:
    (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
    (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
    (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
    (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)


    Constraints:

    1 <= nums.length <= 1000
    1 <= nums[i] <= 104
    All elements in nums are distinct.
*/

class Solution {
    func tupleSameProduct(_ nums: [Int]) -> Int {
        // Dictionary to store the frequency of each product
        var productFrequency: [Int: Int] = [:]

        // Iterate through all pairs of numbers in the array
        for i: Int in 0..<nums.count {
            for j: Int in i + 1..<nums.count {
                // Compute the product of the current pair (nums[i], nums[j])
                let product: Int = nums[i] * nums[j]

                // Store the frequency of each product in the dictionary
                productFrequency[product, default: 0] += 1
            }
        }

        // Variable to store the total number of valid tuples
        var tupleCount: Int = 0

        // Iterate through all product frequencies to count valid tuples
        for pairCount: Int in productFrequency.values {
            if pairCount > 1 {
                // If a product appears in multiple pairs, compute the number of valid tuples
                // Formula: 4 * pairCount * (pairCount - 1)
                // Explanation:
                // - We choose 2 different pairs from `pairCount` pairs (C(pairCount, 2) = pairCount * (pairCount - 1) / 2)
                // - Each selection generates 4 unique permutations (e.g., (a, b, c, d), (a, b, d, c), etc.)
                tupleCount += 4 * pairCount * (pairCount - 1)
            }
        }

        // Return the total number of valid tuples
        return tupleCount
    }
}

