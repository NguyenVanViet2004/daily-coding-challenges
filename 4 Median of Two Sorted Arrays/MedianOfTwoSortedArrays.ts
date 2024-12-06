/*
    Difficulty: Medium
    ----------------------------------------------------------------
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    

    Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    ----------------------------------------------------------------
    Explanation: merged array = [1,2,3] and median is 2.


    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    ----------------------------------------------------------------
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    

    Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/


export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2); // partition in nums1
        const j = Math.floor((m + n + 1) / 2) - i; // partition in nums2

        // Elements at the partition boundaries
        const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
        const minRight1 = i === m ? Infinity : nums1[i];
        const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
        const minRight2 = j === n ? Infinity : nums2[j];

        // Check if the partition is correct
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // If the total length is odd
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }
            // If the total length is even
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } else if (maxLeft1 > minRight2) {
            // Move partition in nums1 to the left
            right = i - 1;
        } else {
            // Move partition in nums1 to the right
            left = i + 1;
        }
    }
    return -1
}
