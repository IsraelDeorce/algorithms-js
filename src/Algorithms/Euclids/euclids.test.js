const { euclids } = require("./euclids")

describe('Euclids', () => {
    it.each([
        [10, 10, 10],
        [20, 40, 20],
        [4, 1220, 516],
        [4, 516, 1220],
        [1, 5, 7],
        [1, 7, 5]
    ])('finds %s as GCD for %s and %s', (expected, a, b) => {
        const result = euclids({ args: [a, b]})
        expect(result).toBe(expected)
    })
})