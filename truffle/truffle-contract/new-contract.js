var Web3 = require('web3');
let contract_json = require('../build/contracts/Vote.json');
let config_json = require('../../configurations/general_config.json');
var provider = new Web3.providers.HttpProvider(config_json.server_host);
var contract = require("truffle-contract");

var MyContract = contract(contract_json);
MyContract.setProvider(provider);
MyContract.defaults({from: '0x92a44db4cf1e53040df34a6b73797fa86009e898'});
// Work around for a bug in truffle contract.
if (typeof MyContract.currentProvider.sendAsync !== "function") {
  MyContract.currentProvider.sendAsync = function() {
    return MyContract.currentProvider.send.apply(
      MyContract.currentProvider,
          arguments
    );
  };
}
