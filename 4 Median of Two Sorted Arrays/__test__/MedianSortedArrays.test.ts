import { findMedianSortedArrays } from '../MedianOfTwoSortedArrays';

describe('findMedianSortedArrays', () => {
    it('should return 2.0 for [1, 3] and [2]', () => {
        const result = findMedianSortedArrays([1, 3], [2]);
        expect(result).toBe(2.0);
    });

    it('should return 1.0 for [1, 1, 1] and [1, 1, 1]', () => {
        const result = findMedianSortedArrays([1, 1, 1], [1, 1, 1]);
        expect(result).toBe(1.0);
    });

    it('should return 3.5 for [1, 2, 3] and [4, 5, 6]', () => {
        const result = findMedianSortedArrays([1, 2, 3], [4, 5, 6]);
        expect(result).toBe(3.5);
    });

    it('should return 2.0 for [] and [2]', () => {
        const result = findMedianSortedArrays([], [2]);
        expect(result).toBe(2.0);
    });

    it('should return 2.5 for [1, 2] and [3, 4]', () => {
        const result = findMedianSortedArrays([1, 2], [3, 4]);
        expect(result).toBe(2.5);
    });

    it('should return 3.5 for [5, 3, 1] and [6, 4, 2]', () => {
        const result = findMedianSortedArrays([5, 3, 1], [6, 4, 2]);
        expect(result).toBe(3.5);
    });

    it('should return 1.0 for [] and [1]', () => {
        const result = findMedianSortedArrays([], [1]);
        expect(result).toBe(1.0);
    });
});
