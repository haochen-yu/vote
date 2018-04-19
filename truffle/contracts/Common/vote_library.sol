pragma solidity  ^0.4.17;
import "./Util/String/string_common.sol";

library VoteLibrary {
    using strings for *;

    struct Choice {
        string name;
        int numVote;
        
    }
    function StringIsInList(string  self, Choice[] storage list) internal returns(Choice storage) {
        for(uint i=0; i<list.length; i++) {
            if (list[i].name.toSlice().equals(self.toSlice())) {
                return list[i];
            }
        }
        //return (Choice("",0));
    }

}