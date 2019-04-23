const TronixToken = artifacts.require("./TronixToken.sol");

module.exports = function(deployer) {
   deployer.deploy(TronixToken);
};
