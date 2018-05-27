var solc = require('solc');
var fs = require('fs');
let currentContract = fs.readFileSync('greeter.sol');
let contractString = currentContract.toString();
var input = {}	
input['greeter.sol'] = contractString;
var output = solc.compile({ sources: input }, 1);

console.log(output);