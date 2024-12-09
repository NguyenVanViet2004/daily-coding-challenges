import { isArraySpecial } from '../SpecialArray2'

describe('isArraySpecial', () => {
    it('should handle single query with a non-special subarray', () => {
        const nums = [3, 4, 1, 2, 6]
        const queries = [[0, 4]]
        const result = isArraySpecial(nums, queries)
        expect(result).toEqual([false])
    })

    it('should handle multiple queries with mixed results', () => {
        const nums = [4, 3, 1, 6]
        const queries = [[0, 2], [2, 3]]
        const result = isArraySpecial(nums, queries)
        expect(result).toEqual([false, true])
    })

    // it('should handle a special subarray', () => {
    //     const nums = [1, 2, 3, 4, 5]
    //     const queries = [[1, 3], [0, 4]]
    //     const result = isArraySpecial(nums, queries)
    //     expect(result).toEqual([true, false])
    // })

    it('should handle edge case with a single element', () => {
        const nums = [7]
        const queries = [[0, 0]]
        const result = isArraySpecial(nums, queries)
        expect(result).toEqual([true]) // A single-element array is trivially special
    })

    it('should handle edge case with all elements having the same parity', () => {
        const nums = [2, 4, 6, 8]
        const queries = [[0, 3], [1, 2]]
        const result = isArraySpecial(nums, queries)
        expect(result).toEqual([false, false])
    })

    it('should handle edge case with alternating parity', () => {
        const nums = [1, 2, 3, 4, 5, 6]
        const queries = [[0, 5], [1, 4], [2, 3]]
        const result = isArraySpecial(nums, queries)
        expect(result).toEqual([true, true, true])
    })

    // it('should handle large input size efficiently', () => {
    //     const nums = Array.from({ length: 100000 }, (_, i) => (i % 2 === 0 ? i + 1 : i + 2))
    //     const queries = [[0, 99999], [50000, 99999], [0, 50000]]
    //     const result = isArraySpecial(nums, queries)
    //     expect(result).toEqual([true, true, true])
    // })
})
