// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 public waversCount;
    event NewWave(address indexed from, uint256 timestamp, string message);
    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }
    Wave[] waves;

    function getWavesCount() public view returns (uint256) {
        console.log("We have %d total waves!", waversCount);
        return waversCount;
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function wave(string memory _message) public {
        waversCount = waversCount + 1;
        console.log("%s waved w/ message %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        emit NewWave(msg.sender, block.timestamp, _message);
    }
}
