import { repeatLimitedString } from "../ConstructStringWithRepeatLimit"

describe('2182 Construct String With Repeat Limit', () => {
  it.each([
    ['cczazcc', 3, 'zzcccac'],
    ["aababab", 2, "bbabaa"]
  ])('should return the lexicographically largest string for input s="%s" with repeatLimit=%i', (s, repeatLimit, expected) => {
    const result = repeatLimitedString(s, repeatLimit)
    expect(result).toBe(expected)
  })
})
