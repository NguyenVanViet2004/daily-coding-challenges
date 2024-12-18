import { finalPrices } from "../finalPrices"

describe('1475 Final Prices With a Special Discount in a Shop', () => {
    it.each([
        [[8, 4, 6, 2, 3], [4, 2, 4, 2, 3]],
        [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
        [[10, 1, 1, 6], [9, 0, 1, 6]],
    ])('given prices %p should return final prices %p', (prices, expected) => {
        expect(finalPrices(prices)).toEqual(expected)
    })
})
