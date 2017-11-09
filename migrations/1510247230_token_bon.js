let BON = artifacts.require("BON.sol")

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
    deployer.deploy(BON)
};
