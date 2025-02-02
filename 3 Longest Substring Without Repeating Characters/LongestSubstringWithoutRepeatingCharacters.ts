/*
    Difficult: Medium
    ----------------------------------------------------------------

    Given a string s, find the length of the longest substring without repeating characters.


    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    ----------------------------------------------------------------
    Explanation: The answer is "abc", with the length of 3.

    
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    ----------------------------------------------------------------
    Explanation: The answer is "b", with the length of 1.


    Example 3:

    Input: s = "pwwkew"
    Output: 3
    ----------------------------------------------------------------
    Explanation: The answer is "wke", with the length of 3.


    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

    Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    let start = 0
    let hasSet = new Set()

    for (let end = 0; end < s.length; end++) {
        while(hasSet.has(s[end])) {
            hasSet.delete(s[start])
            start ++
        }
        hasSet.add(s[end])
        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3