let token = artifacts.require("BON")

contract('BON', async function (accounts) {

    it(`name should be 'bonus'`, async function () {
        const instance = await token.deployed()
        const name = await instance.name()
        assert.strictEqual(name, `bonus`)
    })

    it(`symbol should be 'BON'`, async function () {
        const instance = await token.deployed()
        const symbol = await instance.symbol()
        assert.strictEqual(symbol, `BON`)
    })

})
