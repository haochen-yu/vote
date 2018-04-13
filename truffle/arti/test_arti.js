var Artifactor = require("truffle-artifactor");
var artifactor = new Artifactor("./tst");

var ContractBuild ={
    "contractName": "greeter",
    "abi": [
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_greeting",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "greet",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x6060604052341561000f57600080fd5b6040516103a93803806103a983398101604052808051820191905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190610081929190610088565b505061012d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c957805160ff19168380011785556100f7565b828001600101855582156100f7579182015b828111156100f65782518255916020019190600101906100db565b5b5090506101049190610108565b5090565b61012a91905b8082111561012657600081600090555060010161010e565b5090565b90565b61026d8061013c6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514610051578063cfae321714610066575b600080fd5b341561005c57600080fd5b6100646100f4565b005b341561007157600080fd5b610079610185565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b957808201518184015260208101905061009e565b50505050905090810190601f1680156100e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610183576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b61018d61022d565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102235780601f106101f857610100808354040283529160200191610223565b820191906000526020600020905b81548152906001019060200180831161020657829003601f168201915b5050505050905090565b6020604051908101604052806000815250905600a165627a7a72305820132c736026c4d33491d74790deb399c4ad89793a6748216105c75b7e450693670029",
    "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514610051578063cfae321714610066575b600080fd5b341561005c57600080fd5b6100646100f4565b005b341561007157600080fd5b610079610185565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b957808201518184015260208101905061009e565b50505050905090810190601f1680156100e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610183576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b61018d61022d565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102235780601f106101f857610100808354040283529160200191610223565b820191906000526020600020905b81548152906001019060200180831161020657829003601f168201915b5050505050905090565b6020604051908101604052806000815250905600a165627a7a72305820132c736026c4d33491d74790deb399c4ad89793a6748216105c75b7e450693670029",
    "sourceMap": "429:349:1:-;;;592:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;236:10;228:5;;:18;;;;;;;;;;;;;;;;;;655:9;644:8;:20;;;;;;;;;;;;:::i;:::-;;592:79;429:349;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "429:349:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;311:114;;;;;;;;;;;;;;701:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;701:75:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;311:114;359:5;;;;;;;;;;;345:19;;:10;:19;;;341:77;;;397:5;;;;;;;;;;;384:19;;;341:77;311:114::o;701:75::-;736:6;;:::i;:::-;761:8;754:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;701:75;:::o;429:349::-;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.4.17;\ncontract mortal {\n    /* Define variable owner of the type address */\n    address owner;\n\n    /* This function is executed at initialization and sets the owner of the contract */\n    function mortal() { owner = msg.sender; }\n\n    /* Function to recover the funds on the contract */\n    function kill() {\n            if (msg.sender == owner) {\n                selfdestruct(owner);\n            }\n     }\n}\n\ncontract greeter is mortal {\n    /* Define variable greeting of the type string */\n    string greeting;\n    \n    /* This runs when the contract is executed */\n    function greeter(string _greeting) public {\n        greeting = _greeting;\n    }\n\n    /* Main function */\n    function greet() constant returns (string) {\n        return greeting;\n    }\n}",
    "sourcePath": "/home/henry/Documents/Project/vote/truffle/contracts/greeter.sol",
    "ast": {
      "absolutePath": "/home/henry/Documents/Project/vote/truffle/contracts/greeter.sol",
      "exportedSymbols": {
        "greeter": [
          107
        ],
        "mortal": [
          84
        ]
      },
      "id": 108,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 84,
          "linearizedBaseContracts": [
            84
          ],
          "name": "mortal",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 60,
              "name": "owner",
              "nodeType": "VariableDeclaration",
              "scope": 84,
              "src": "99:13:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 59,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "99:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 68,
                "nodeType": "Block",
                "src": "226:23:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "228:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "236:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 65,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "236:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "228:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 67,
                    "nodeType": "ExpressionStatement",
                    "src": "228:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 69,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "mortal",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 61,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "223:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 62,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "226:0:1"
              },
              "scope": 84,
              "src": "208:41:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "327:98:1",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 72,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "345:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "345:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "359:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "345:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 81,
                    "nodeType": "IfStatement",
                    "src": "341:77:1",
                    "trueBody": {
                      "id": 80,
                      "nodeType": "Block",
                      "src": "366:52:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 77,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60,
                                "src": "397:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 76,
                              "name": "selfdestruct",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 126,
                              "src": "384:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                                "typeString": "function (address)"
                              }
                            },
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "384:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 79,
                          "nodeType": "ExpressionStatement",
                          "src": "384:19:1"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "id": 83,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "kill",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 70,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "324:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 71,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "327:0:1"
              },
              "scope": 84,
              "src": "311:114:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 108,
          "src": "25:402:1"
        },
        {
          "baseContracts": [
            {
              "arguments": [],
              "baseName": {
                "contractScope": null,
                "id": 85,
                "name": "mortal",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 84,
                "src": "449:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_mortal_$84",
                  "typeString": "contract mortal"
                }
              },
              "id": 86,
              "nodeType": "InheritanceSpecifier",
              "src": "449:6:1"
            }
          ],
          "contractDependencies": [
            84
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 107,
          "linearizedBaseContracts": [
            107,
            84
          ],
          "name": "greeter",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 88,
              "name": "greeting",
              "nodeType": "VariableDeclaration",
              "scope": 107,
              "src": "516:15:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string storage ref"
              },
              "typeName": {
                "id": 87,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "516:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 97,
                "nodeType": "Block",
                "src": "634:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "greeting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "644:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_greeting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "655:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "644:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 96,
                    "nodeType": "ExpressionStatement",
                    "src": "644:20:1"
                  }
                ]
              },
              "documentation": null,
              "id": 98,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "greeter",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 90,
                    "name": "_greeting",
                    "nodeType": "VariableDeclaration",
                    "scope": 98,
                    "src": "609:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    },
                    "typeName": {
                      "id": 89,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "609:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "608:18:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "634:0:1"
              },
              "scope": 107,
              "src": "592:79:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 105,
                "nodeType": "Block",
                "src": "744:32:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 103,
                      "name": "greeting",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "761:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 102,
                    "id": 104,
                    "nodeType": "Return",
                    "src": "754:15:1"
                  }
                ]
              },
              "documentation": null,
              "id": 106,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "greet",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "715:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 102,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 101,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 106,
                    "src": "736:6:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    },
                    "typeName": {
                      "id": 100,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "736:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "735:8:1"
              },
              "scope": 107,
              "src": "701:75:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 108,
          "src": "429:349:1"
        }
      ],
      "src": "0:778:1"
    },
    "legacyAST": {
      "absolutePath": "/home/henry/Documents/Project/vote/truffle/contracts/greeter.sol",
      "exportedSymbols": {
        "greeter": [
          107
        ],
        "mortal": [
          84
        ]
      },
      "id": 108,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 84,
          "linearizedBaseContracts": [
            84
          ],
          "name": "mortal",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 60,
              "name": "owner",
              "nodeType": "VariableDeclaration",
              "scope": 84,
              "src": "99:13:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 59,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "99:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 68,
                "nodeType": "Block",
                "src": "226:23:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "228:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "236:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 65,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "236:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "228:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 67,
                    "nodeType": "ExpressionStatement",
                    "src": "228:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 69,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "mortal",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 61,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "223:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 62,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "226:0:1"
              },
              "scope": 84,
              "src": "208:41:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "327:98:1",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 72,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120,
                          "src": "345:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "345:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "359:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "345:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 81,
                    "nodeType": "IfStatement",
                    "src": "341:77:1",
                    "trueBody": {
                      "id": 80,
                      "nodeType": "Block",
                      "src": "366:52:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 77,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60,
                                "src": "397:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 76,
                              "name": "selfdestruct",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 126,
                              "src": "384:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                                "typeString": "function (address)"
                              }
                            },
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "384:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 79,
                          "nodeType": "ExpressionStatement",
                          "src": "384:19:1"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "id": 83,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "kill",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 70,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "324:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 71,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "327:0:1"
              },
              "scope": 84,
              "src": "311:114:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 108,
          "src": "25:402:1"
        },
        {
          "baseContracts": [
            {
              "arguments": [],
              "baseName": {
                "contractScope": null,
                "id": 85,
                "name": "mortal",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 84,
                "src": "449:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_mortal_$84",
                  "typeString": "contract mortal"
                }
              },
              "id": 86,
              "nodeType": "InheritanceSpecifier",
              "src": "449:6:1"
            }
          ],
          "contractDependencies": [
            84
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 107,
          "linearizedBaseContracts": [
            107,
            84
          ],
          "name": "greeter",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 88,
              "name": "greeting",
              "nodeType": "VariableDeclaration",
              "scope": 107,
              "src": "516:15:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string storage ref"
              },
              "typeName": {
                "id": 87,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "516:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 97,
                "nodeType": "Block",
                "src": "634:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "greeting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "644:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_greeting",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "655:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "644:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 96,
                    "nodeType": "ExpressionStatement",
                    "src": "644:20:1"
                  }
                ]
              },
              "documentation": null,
              "id": 98,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "greeter",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 90,
                    "name": "_greeting",
                    "nodeType": "VariableDeclaration",
                    "scope": 98,
                    "src": "609:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    },
                    "typeName": {
                      "id": 89,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "609:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "608:18:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "634:0:1"
              },
              "scope": 107,
              "src": "592:79:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 105,
                "nodeType": "Block",
                "src": "744:32:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 103,
                      "name": "greeting",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "761:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 102,
                    "id": 104,
                    "nodeType": "Return",
                    "src": "754:15:1"
                  }
                ]
              },
              "documentation": null,
              "id": 106,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "greet",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "715:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 102,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 101,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 106,
                    "src": "736:6:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    },
                    "typeName": {
                      "id": 100,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "736:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "735:8:1"
              },
              "scope": 107,
              "src": "701:75:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 108,
          "src": "429:349:1"
        }
      ],
      "src": "0:778:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xc65053e8c35e127febe4d7f8789adf14b9ee0409",
        "transactionHash": "0x8d0ac85e4615682635400ab907dd7c46e667213040e354fa2a50642c7af22679"
      }
    },
    "schemaVersion": "2.0.0",
    "updatedAt": "2018-04-01T00:35:18.960Z"
  } 
var contract_data = {
    contract_name: "GreeterContract",
    abi: ContractBuild["abi"]
}

artifactor.save(contract_data, "./greeter.sol.js").then(function(result) {
    console.log(result);
});

