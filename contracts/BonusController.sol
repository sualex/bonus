pragma solidity ^0.4.18;

// todo - make an interface
contract BonusController {

    address public tokenContractAddress;
    // address is passed by truffle migration
    function BonusController(address a) {
        tokenContractAddress = a;
    }
    // bonus calculation - should be overridable
    function calculateBonus(uint pSum) internal returns (uint)  {
        return pSum;
    }
    // charge address a bonus
    function charge(address bonusReceiver, uint purchaseSum) returns (uint){
        uint sum = calculateBonus(purchaseSum);
        return sum;
    }

}
