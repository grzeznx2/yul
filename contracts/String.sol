// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract String {

   function charAt(string memory input, uint index) public pure returns(bytes2) {

        assembly{
            let mask := 0xff00000000000000000000000000000000000000000000000000000000000000
            let strAddr := add(input, add(32, index))
            mstore(strAddr, and(mload(strAddr), mask ))
            return(strAddr,32)
        }
   }

}