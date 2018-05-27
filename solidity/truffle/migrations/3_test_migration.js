var mortal = artifacts.require("mortal");
var greeter = artifacts.require("greeter");
module.exports = function(deployer) {
  deployer.deploy(mortal);
  deployer.deploy(greeter, "hi");
};
