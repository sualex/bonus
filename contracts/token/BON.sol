pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/BasicToken.sol";

// (BasicToken) implements (ERC20Basic)
// members :

// - uint256 public totalSupply

// - mapping(address => uint256) balances -> balances registry

// - function balanceOf(address who) public constant returns (uint256)
// - function transfer(address to, uint256 value) public returns (bool)
// - event Transfer(address indexed from, address indexed to, uint256 value)

contract BON is BasicToken {
    string public name = "bonus";
    string public symbol = "BON";
}
