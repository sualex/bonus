pragma solidity ^0.4.18;


// todo - make an interface
contract BonusController {
    // reference to the token contract
    address public tokenContractAddress;
    // address is passed by truffle migration
    function BonusController(address a) {
        tokenContractAddress = a;
    }
    // bonus calculation - should be overridable

    function calculateBonus(uint pSum) internal returns (uint)  {
        uint result = 0;
        result = (pSum <= 0.5 ether) ? 1 * (10 ** 18):
                 (pSum >= 0.5 ether) && (pSum <= 1 ether) ? 10 * (10 ** 18) :
                 (pSum / 100);

        return result;
    }
    // charge address a bonus
    function charge(address bonusReceiver, uint purchaseSum) returns (uint){
        uint sum = calculateBonus(purchaseSum);
        return sum;
    }

}

