var assert = require('assert');
var Web3 = require('web3');
var MyContract = artifacts.require('Vote');
// var provider = new Web3.providers.HttpProvider(config_json.server_host);
// var contract = require("truffle-contract");
// MyContract.defaults({from: '0x92a44db4cf1e53040df34a6b73797fa86009e898'});
// MyContract.setProvider(provider);

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });
contract('MyContract', function(val) {
  console.log(val);
  var choice1 = 'Choice1';
  var choice2 = 'Choice2';
  it("Adds one choice", function() {
      return MyContract.deployed().then(function(instance) {
        return instance.AddChoice(choice1);
      });
  })

  it("Adds second choice", function() {
    return MyContract.deployed().then(function(instance) {
      return instance.AddChoice(choice2).then(function(){
        return instance.GetChoices();
      }).then(function(result){
        console.log(result);
        assert.equal(result, '|' + choice1 + '|' + choice2);
      }) ;
    });


  })
  it("Make a vote", function() {
    return MyContract.deployed().then(function(instance) {
      return instance.MakeVote('name','name', choice1).then(function(result){
        console.log(result);
        return instance.MakeVote('name', 'name', choice1);
      }).then(function (result) {
        console.log(result);
        return instance.CheckResult(choice1);
      }).then(function(result) {
        console.log(result.toNumber());
      });
    })
})


})