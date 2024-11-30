/*
    Difficult: Easy
    ----------------------------------------------------------------
    
    Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

    A shift on s consists of moving the leftmost character of s to the rightmost position.

    For example, if s = "abcde", then it will be "bcdea" after one shift.


    Example 1:

    Input: s = "abcde", goal = "cdeab"
    Output: true


    Example 2:

    Input: s = "abcde", goal = "abced"
    Output: false
    

    Constraints:

    1 <= s.length, goal.length <= 100
    s and goal consist of lowercase English letters.
*/

// function rotateString(s: string, goal: string): boolean {
//     if (s.length !== goal.length) return false

//     const doubleS = s + s
//     if (doubleS.includes(goal)) return true
//     return false
// }

function rotateString(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false
    let rotated = s
    for (let i = 0; i < s.length; i++) {
        rotated = rotated.substring(1) + rotated[0]
        if (rotated === goal) return true
    }

    return false
}

console.log(rotateString("abcde", "cdeab")) // true
console.log(rotateString("abcde", "abced")) // false