/*
    Difficult: Easy
    ----------------------------------------------------------------

    Given an array arr of integers, check if there exist two indices i and j such that :

    - i != j
    - 0 <= i, j < arr.length
    - arr[i] == 2 * arr[j]

    Example 1:

    Input: arr = [10,2,5,3]
    Output: true
    ----------------------------------------------------------------
    Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]



    Example 2:

    Input: arr = [3,1,7,11]
    Output: false
    ----------------------------------------------------------------
    Explanation: There is no i and j that satisfy the conditions.
    

    Constraints:

    2 <= arr.length <= 500
    -103 <= arr[i] <= 103
*/


function checkIfExist(arr: number[]): boolean {
    const set = new Set<number>()
    for (let x of arr) {
        if (set.has(2 * x) || (x % 2 === 0 && set.has(x / 2))) {
            return true
        }
        set.add(x)
    }
    return false
}


console.log(checkIfExist([10,2,5,3])) // true
console.log(checkIfExist([3,1,7,11])) // false
