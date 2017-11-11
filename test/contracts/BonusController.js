// https://habrahabr.ru/post/321362/

let BonusController = artifacts.require("BonusController")

contract('BonusController', function (accounts) {

    it (`Should contain a valid token contract address`, async function () {
        const instance = await BonusController.deployed()
        const addr = await instance.tokenContractAddress()
        assert(web3.isAddress(addr))
    })

    it(`Should calculate to 1`, async function () {
        const instance = await BonusController.deployed()
        const purchaseAmount = 0.1
        let wBonus = await instance.charge.call(0, web3.toWei(purchaseAmount, 'ether'))
        let eBonus = web3.fromWei(wBonus, 'ether').toNumber()
        assert.strictEqual(eBonus, 1)
    })

    it(`Should calculate to 10`, async function () {
        const instance = await BonusController.deployed()
        const purchaseAmount = 0.6
        let wBonus = await instance.charge.call(0, web3.toWei(purchaseAmount, 'ether'))
        let eBonus = web3.fromWei(wBonus, 'ether').toNumber()
        assert.strictEqual(eBonus, 10)
    })

    it(`Should calculate to 1`, async function () {
        const instance = await BonusController.deployed()
        const purchaseAmount = 100
        let wBonus = await instance.charge.call(0, web3.toWei(purchaseAmount, 'ether'))
        let eBonus = web3.fromWei(wBonus, 'ether').toNumber()
        assert.strictEqual(eBonus, 1)
    })

    it(`Should calculate to 0.02`, async function () {
        const instance = await BonusController.deployed()
        const purchaseAmount = 2
        let wBonus = await instance.charge.call(0, web3.toWei(purchaseAmount, 'ether'))
        let eBonus = web3.fromWei(wBonus, 'ether').toNumber()
        assert.strictEqual(eBonus, 0.02)
    })

})
