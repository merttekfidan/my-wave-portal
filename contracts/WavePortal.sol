pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 public waversCount;

    function constructure() public {
        console.log("I am a smart contract");
    }

    function getWavesCount() public view returns (uint256) {
        console.log("Wavers count:", waversCount);
        return waversCount;
    }

    function wave() public {
        console.log(msg.sender, " is waved you!");
        waversCount = waversCount + 1;
    }
}
