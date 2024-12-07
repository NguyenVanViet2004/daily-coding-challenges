import { minimumSize } from "../MinimumLimitOfBallsInABag"

describe('Minimum Limit of Balls in a Bag', () => {
    it('should return the minimum possible penalty', () => {
        const nums = [9]
        const maxOperations = 2
        const expectedResult = 3
        expect(minimumSize(nums, maxOperations)).toBe(expectedResult)
    })

    it('should return the minimum possible penalty', () => {
        const nums = [2, 4, 8, 2]
        const maxOperations = 4
        const expectedResult = 2
        expect(minimumSize(nums, maxOperations)).toBe(expectedResult)
    })

    it('should return the minimum possible penalty', () => {
        const nums = [1, 1, 1]
        const maxOperations = 1
        const expectedResult = 1
        expect(minimumSize(nums, maxOperations)).toBe(expectedResult)
    })
})
