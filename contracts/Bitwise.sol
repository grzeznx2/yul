// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bitwise {

    function countBitSet(uint8 data) public pure returns (uint8 result) {

        for( uint i = 0; i < 8; i += 1) {

            if( ((data >> i) & 1) == 1) {

                result += 1;

            }

        }

    }

    function countBitSetAsm(uint8 data ) public pure returns (uint8) {

        assembly {
            let ptr := mload(0x40)
            let result
            for {let i := 0} lt(i,8) { i := add(i,1)}{
                let a := and(shr(i, data),1)
                if eq(a,1) { result := add(result, a) }
            }
            mstore(ptr, result)
            return(ptr, 32)
        }

    }

 


}