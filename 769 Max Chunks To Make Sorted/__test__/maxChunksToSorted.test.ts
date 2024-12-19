import { maxChunksToSorted } from "../maxChunksToSorted";

describe('769 Max Chunks To Make Sorted', () => {
    it.each([
        [[4,3,2,1,0], 1],
        [[1,0,2,3,4], 4]
    ])('given arr %p should return chunks %p', (prices, expected) => {
        expect(maxChunksToSorted(prices)).toEqual(expected)
    })
});
