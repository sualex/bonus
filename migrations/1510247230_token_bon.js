const BON = artifacts.require("BON")
const BonusController = artifacts.require("BonusController")

module.exports = function (deployer) {
    deployer.deploy(BON).then(function () {
        return deployer.deploy(BonusController, BON.address);
    })
};
