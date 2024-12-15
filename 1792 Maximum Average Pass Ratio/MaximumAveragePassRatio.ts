/*
    Difficult: Medium
    ----------------------------------------------------------------

    There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. 
    You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

    You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to.
    You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

    The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class.
    The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

    Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

    

    Example 1:

    Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
    Output: 0.78333
    ----------------------------------------------------------------
    Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.



    Example 2:

    Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
    Output: 0.53485
    

    Constraints:

    1 <= classes.length <= 105
    classes[i].length == 2
    1 <= passi <= totali <= 105
    1 <= extraStudents <= 105
*/

class MaxHeap {
    heap: [number, number, number][]

    constructor() {
        this.heap = []
    }

    push(val: [number, number, number]) {
        this.heap.push(val)
        this.bubbleUp()
    }

    pop(): [number, number, number] | undefined {
        if (this.heap.length === 0) return undefined
        if (this.heap.length === 1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.bubbleDown()
        return top
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex][0] >= this.heap[index][0]) break
            ;[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }

    bubbleDown() {
        let index = 0
        const length = this.heap.length
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let largest = index

            if (leftChildIndex < length && this.heap[leftChildIndex][0] > this.heap[largest][0]) {
                largest = leftChildIndex
            }

            if (rightChildIndex < length && this.heap[rightChildIndex][0] > this.heap[largest][0]) {
                largest = rightChildIndex
            }

            if (largest === index) break
            ;[this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
            index = largest
        }
    }
}

export function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const calculateGain = (pass: number, total: number): number =>
        (pass + 1) / (total + 1) - pass / total

    const maxHeap = new MaxHeap()
    for (const [pass, total] of classes) {
        maxHeap.push([calculateGain(pass, total), pass, total])
    }

    for (let i = 0; i < extraStudents; i++) {
        const [gain, pass, total] = maxHeap.pop()!
        const newPass = pass + 1
        const newTotal = total + 1
        maxHeap.push([calculateGain(newPass, newTotal), newPass, newTotal])
    }

    let totalRatio = 0
    while (maxHeap.heap.length > 0) {
        const [, pass, total] = maxHeap.pop()!
        totalRatio += pass / total
    }

    return totalRatio / classes.length
}