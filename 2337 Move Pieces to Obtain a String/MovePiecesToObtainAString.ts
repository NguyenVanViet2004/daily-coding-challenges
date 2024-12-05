/*

    Difficult: Medium
    ----------------------------------------------------------------

    You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

    The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
    The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
    Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

    

    Example 1:

    Input: start = "_L__R__R_", target = "L______RR"
    Output: true
    ----------------------------------------------------------------
    Explanation: We can obtain the string target from start by doing the following moves:
    - Move the first piece one step to the left, start becomes equal to "L___R__R_".
    - Move the last piece one step to the right, start becomes equal to "L___R___R".
    - Move the second piece three steps to the right, start becomes equal to "L______RR".
    Since it is possible to get the string target from start, we return true.


    Example 2:

    Input: start = "R_L_", target = "__LR"
    Output: false
    ----------------------------------------------------------------
    Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
    After that, no pieces can move anymore, so it is impossible to obtain the string target from start.


    Example 3:

    Input: start = "_R", target = "R_"
    Output: false
     ----------------------------------------------------------------
    Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.
    

    Constraints:

    n == start.length == target.length
    1 <= n <= 105
    start and target consist of the characters 'L', 'R', and '_'.

*/

function canChange(start: string, target: string): boolean {
    const n = start.length

    // Remove "_" to compare the order of "L" and "R" in both strings
    const filteredStart = start.replace(/_/g, '')
    const filteredTarget = target.replace(/_/g, '')

    // If the order of "L" and "R" is different, return false
    if (filteredStart !== filteredTarget) {
        return false
    }

    // Validate movement rules
    let j = 0
    for (let i = 0; i < n; i++) {
        if (start[i] === '_') continue // Skip blank spaces in the "start" string

        // Find the corresponding position in the "target" string
        while (target[j] === '_') {
            j++
        }

        // Check movement rules:
        if (
            (start[i] === 'L' && i < j) || // "L" cannot move to the right
            (start[i] === 'R' && i > j)   // "R" cannot move to the left
        ) {
            return false
        }
        j++
    }

    return true
}

console.log(canChange("_L__R__R_", "L______RR")) // true
console.log(canChange("R_L_", "__LR")) // false
console.log(canChange("_R", "R_")) // false
console.log(canChange("L__R", "L__R")) // true
console.log(canChange("___", "___")) // true
console.log(canChange("R__", "__R")) // false
console.log(canChange("__L", "L__")) // false
console.log(canChange("_L_R_", "_L_R_")) // true
console.log(canChange("R_L__R", "_R_L_R")) // false
console.log(canChange("L_R___", "L___R_")) // true