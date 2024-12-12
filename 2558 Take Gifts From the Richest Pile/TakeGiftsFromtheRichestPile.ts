/* 
    Difficult: Easy
    ----------------------------------------------------------------

    You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

    Choose the pile with the maximum number of gifts.
    If there is more than one pile with the maximum number of gifts, choose any.
    Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
    Return the number of gifts remaining after k seconds.

    

    Example 1:

    Input: gifts = [25,64,9,4,100], k = 4
    Output: 29
    ----------------------------------------------------------------
    Explanation: 
    The gifts are taken in the following way:
    - In the first second, the last pile is chosen and 10 gifts are left behind.
    - Then the second pile is chosen and 8 gifts are left behind.
    - After that the first pile is chosen and 5 gifts are left behind.
    - Finally, the last pile is chosen again and 3 gifts are left behind.
    The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.


    Example 2:

    Input: gifts = [1,1,1,1], k = 4
    Output: 4
    ----------------------------------------------------------------
    Explanation: 
    In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. 
    That is, you can't take any pile with you. 
    So, the total gifts remaining are 4.
    

    Constraints:

    1 <= gifts.length <= 103
    1 <= gifts[i] <= 109
    1 <= k <= 103
*/

export function pickGifts(gifts: number[], k: number): number {
    const maxHeap = new MaxHeap(gifts)

    for (let i = 0; i < k; i++) {
        const maxGift = maxHeap.pop()
        const remainingGift = Math.floor(Math.sqrt(maxGift))
        maxHeap.push(remainingGift)
    }

    return maxHeap.toArray().reduce((sum, gift) => sum + gift, 0)
}

class MaxHeap {
    private heap: number[] = []

    constructor(elements: number[]) {
        for (const el of elements) this.push(el)
    }

    push(value: number): void {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    pop(): number {
        if (this.heap.length === 0) return -1
        if (this.heap.length === 1) return this.heap.pop()!

        const maxValue = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.bubbleDown(0)

        return maxValue
    }

    toArray(): number[] {
        return [...this.heap]
    }

    private bubbleUp(index: number): void {
        const parentIndex = Math.floor((index - 1) / 2)
        if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
            this.swap(parentIndex, index)
            this.bubbleUp(parentIndex)
        }
    }

    private bubbleDown(index: number): void {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let largest = index

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild
        }
        if (largest !== index) {
            this.swap(largest, index)
            this.bubbleDown(largest)
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
}

