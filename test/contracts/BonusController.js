// https://habrahabr.ru/post/321362/

let BonusController = artifacts.require("BonusController")

contract('BonusController', function (accounts) {

    it (`Should contain a valid token contract address`, async function () {
        const instance = await BonusController.deployed()
        const addr = await instance.tokenContractAddress()
        assert(web3.isAddress(addr))
    })

    it(`Should be 5`, async function () {
        const instance = await BonusController.deployed()
        const result = await instance.charge.call(0, 5)
        assert.strictEqual(result.toNumber(), 5)
    })

})
