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

var ContractPromise = MyContract.deployed();
var ContractInstance;
Promise.resolve(ContractPromise).then(function(instance) {
  ContractInstance = instance;
  return ContractInstance.MakeVote("","", "1"); 
}).then(function(message) {
  console.log(message.toNumber());
  return ContractInstance.CheckResult("1");
}).then(function(message2){
  console.log(message2.toNumber());
}).catch(function(error){
  console.log(error);
});