const BatteryPassport = artifacts.require("BatteryPassport");

module.exports = function (deployer) {
  deployer.deploy(BatteryPassport);
};
