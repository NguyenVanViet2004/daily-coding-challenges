import { maxTwoEvents } from "../TwoBestNon-OverlappingEvents"

describe('Two Best Non-Overlapping Events', () => {
    it('should return 4 for [[1, 3, 2], [4, 5, 2], [2, 4, 3]]', () => {
        const result = maxTwoEvents([[1, 3, 2], [4, 5, 2], [2, 4, 3]])
        expect(result).toBe(4)
    })

    it('should return 5 for [[1, 3, 2], [4, 5, 2], [1, 5, 5]]', () => {
        const result = maxTwoEvents([[1, 3, 2], [4, 5, 2], [1, 5, 5]])
        expect(result).toBe(5)
    })

    it('should return 8 for [[1, 5, 3], [1, 5, 1], [6, 6, 5]]', () => {
        const result = maxTwoEvents([[1, 5, 3], [1, 5, 1], [6, 6, 5]])
        expect(result).toBe(8)
    })

    it('should return 6 for [[1, 2, 3], [3, 4, 3]]', () => {
        const result = maxTwoEvents([[1, 2, 3], [3, 4, 3]])
        expect(result).toBe(6)
    })

    it('should return 9 for [[1, 3, 5], [4, 6, 4], [2, 4, 3]]', () => {
        const result = maxTwoEvents([[1, 3, 5], [4, 6, 4], [2, 4, 3]])
        expect(result).toBe(9)
    })

    it('should return 0 for []', () => {
        const result = maxTwoEvents([])
        expect(result).toBe(0)
    })

    it('should handle a large number of events with non-overlapping intervals', () => {
        const events = Array.from({ length: 1000 }, (_, i) => [i * 2 + 1, i * 2 + 2, i + 1])
        const result = maxTwoEvents(events)
        expect(result).toBe(1999) // Last two events: value = 999 + 1000
    })

    it('should handle a large number of events with overlapping intervals', () => {
        const events = Array.from({ length: 1000 }, (_, i) => [1, 1000, i + 1])
        const result = maxTwoEvents(events)
        expect(result).toBe(1000) // Only the event with the highest value can be chosen
    })

    it('should handle random intervals and values with partial overlap', () => {
        const events = [
            [1, 3, 4], [2, 5, 3], [6, 8, 5], [9, 10, 6], [11, 15, 10],
            [16, 20, 2], [21, 25, 8], [26, 30, 7], [31, 35, 12], [36, 40, 15]
        ]
        const result = maxTwoEvents(events)
        expect(result).toBe(27) // Choose [36, 40, 15] and [31, 35, 12]
    })

    it('should handle a mix of large and small values', () => {
        const events = [
            [1, 2, 1], [3, 4, 1000], [5, 6, 1], [7, 8, 1], [9, 10, 999], [11, 12, 1]
        ]
        const result = maxTwoEvents(events)
        expect(result).toBe(1999) // Choose [3, 4, 1000] and [9, 10, 999]
    })

    it('should handle maximum constraints', () => {
        const events = Array.from({ length: 100000 }, (_, i) => [i + 1, i + 2, i + 1])
        const result = maxTwoEvents(events)
        expect(result).toBe(199999) // Last two events: value = 99999 + 100000
    })

    it('should return 0 for no events', () => {
        const events: number[][] = []
        const result = maxTwoEvents(events)
        expect(result).toBe(0)
    })

    it('should handle events with minimal intervals and values', () => {
        const events = [
            [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4], [5, 5, 5]
        ]
        const result = maxTwoEvents(events)
        expect(result).toBe(9) // Choose [4, 4, 4] and [5, 5, 5]
    })
})
