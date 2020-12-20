const { euclids } = require("./euclids")

describe('Euclids', () => {
    it('is a basic test', () => {
        const result = euclids()
        expect(result).toBe(true)
    })
})