import { maximumLength } from "../FindLongestSpecialSubstring";

describe('Find Longest Special Substring That Occurs Thrice I', () => {
    it('should return 2 for "aaaa"', () => {
        const result = maximumLength('aaaa');
        expect(result).toBe(2);
    })

    it('should return -1 for "abcdef"', () => {
        const result = maximumLength('abcdef');
        expect(result).toBe(-1);
    })

    it('should return 1 for "abcaba"', () => {
        const result = maximumLength('abcaba');
        expect(result).toBe(1);
    })
});
