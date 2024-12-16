import { getFinalState } from '../FinalArrayState'

describe('3264 Final Array State After K Multiplication Operations I', () => {
    it.each([
        [[2, 1, 3, 5, 6], 5, 2, [8, 4, 6, 5, 6]],
        [[1, 2], 3, 4, [16, 8]]
    ])(
        'should return the correct final state for nums = %p, k = %i, multiplier = %i',
        (nums, k, multiplier, expected) => {
            const result = getFinalState(nums, k, multiplier)
            expect(result).toEqual(expected)
        }
    )
})
