pragma solidity  ^0.4.17;
import "./Common/owner.sol";
import "./Common/Util/String/string_common.sol";
import "./Common/vote_library.sol";

contract Vote is owned {

    using strings for *;
    using VoteLibrary for *;
    // event Voted(
    //     string indexed _voterId, 
    //     string indexed _voterName,
    //     string _decision
    // );
    VoteLibrary.Choice[] Choices;

    function Vote() public {
    }
    function AddChoice(string choice) public {
        Choices.push(VoteLibrary.Choice(choice, 0));
    }
    function GetChoices() public constant returns(string) {
         
        string memory s = "";

        for(uint i = 0; i < Choices.length; i++) {
            s = s.toSlice().concat("|".toSlice());
            s = s.toSlice().concat(Choices[i].name.toSlice());
        }
        return s;
    }
    //returns 1 if successful otherwise return -1;
    function MakeVote(string voterId, string voterName, string decision) public returns(int) {
        var choice = decision.StringIsInList(Choices);
        if (bytes(choice.name).length !=0) {
            choice.numVote = choice.numVote + 1;
                //emit Voted(voterId, voterName, decision);
                return choice.numVote;
        }
        return -1;

    }
    //-1 if does not exist
    function CheckResult(string decision) public constant returns(int) {
        var choice = decision.StringIsInList(Choices);
        if (bytes(choice.name).length !=0) {
            return choice.numVote;
        }
        return -1;
    }


}
