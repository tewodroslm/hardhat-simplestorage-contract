// SPDX-License-Identifier: MIT
// import "hardhat/console.sol";
/**
 *Submitted for verification at Etherscan.io on 2023-11-29
 */

pragma solidity ^0.8.9;

contract SimpleStorage {
    uint256 public favoriteNumber;
    mapping(string => uint256) public nameToFavoriteNumber;
    struct People {
        uint favoriteNumber;
        string name;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _number) public {
        people.push(People(_number, _name));
        nameToFavoriteNumber[_name] = _number;
    }
}
