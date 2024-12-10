import { maximumLength } from "../FindLongestSpecialSubstring"

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

    it('should return -1 for "acc"', () => {
        const result = maximumLength('acc');
        expect(result).toBe(-1);
    })

    it('should return 1 for "aaa"', () => {
        const result = maximumLength('aaa');
        expect(result).toBe(1);
    })

    it('should return 5 for "abcccccddddabcccccddddabcccccdddd"', () => {
        const result = maximumLength('abcccccddddabcccccddddabcccccdddd');
        expect(result).toBe(5);
    })

    it('should return 8 for "jinhhhtttttttefffffjjjjjjjjjfffffjjjjjjjjjzvvvvvvg"', () => {
        const result = maximumLength('jinhhhtttttttefffffjjjjjjjjjfffffjjjjjjjjjzvvvvvvg');
        expect(result).toBe(8);
    })

    it('should return 24 for "aaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaa"', () => {
        const result = maximumLength('aaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaa');
        expect(result).toBe(24);
    })
})
