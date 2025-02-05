/*
    Difficult: Easy
    ----------------------------------------------------------------
    You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
    Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.



    Example 1:

    Input: s1 = "bank", s2 = "kanb"
    Output: true
    ----------------------------------------------------------------
    Explanation: For example, swap the first character with the last character of s2 to make "bank".

    Example 2:

    Input: s1 = "attack", s2 = "defend"
    Output: false
    ----------------------------------------------------------------
    Explanation: It is impossible to make them equal with one string swap.

    Example 3:

    Input: s1 = "kelb", s2 = "kelb"
    Output: true
    ----------------------------------------------------------------
    Explanation: The two strings are already equal, so no string swap operation is required.


    Constraints:

    1 <= s1.length, s2.length <= 100
    s1.length == s2.length
    s1 and s2 consist of only lowercase English letters.
*/

class Solution {
    func areAlmostEqual(_ s1: String, _ s2: String) -> Bool {
        guard s1 != s2 else { return true }

        var diff: [Int] = []
        let s1Array: [String.Element] = Array(s1)
        let s2Array: [String.Element] = Array(s2)

        for i: Int in 0..<s1.count {
            if s1Array[i] != s2Array[i] {
                diff.append(i)
            }
        }
        guard diff.count == 2 else { return false }

        let i: Int = diff[0]
        let j: Int = diff[1]

        var s1Swapped: [String.Element] = s1Array
        s1Swapped.swapAt(i, j)

        guard s1Array != s2Array else { return true }

        var s2Swapped: [String.Element] = s2Array
        s2Swapped.swapAt(i, j)

        guard s1Swapped != s2Array else { return true }

        return false
    }
}
