/*  Solidity Language: Similar to JavaScript.
Smart Contract structure: is similar to a Class format in OOP.

We will specify the compiler version of Solidity: 
pragma solidity ^0.4.0; Or any version until 0.5.0

contract Greeter {
    uint val;
       function getValue() public returns(uint) {
            return val;
        }
}
contract = the key word
Greeter = specified name of the contract
uint val = a field specified in the body of the Smart Contract Function. The type uint means that it is an unassigned integer.
getValue() = method that will..... This is defined be public which means anyone on the network can call it. The return type is then defined next to public type. The body returns the val.


TYPES IN SOLIDITY:
bool flag;                 true/false;
int signedNum;             Signed 256 bit integer;
uint unsignedNum;          Unsigned 256 bit integer;
int8, int16,..int256;      8 to 256 bit signed integers;
uint8, uint16,..uint256;   8 to 256 bit unsigned integers;
string message;            String of characters;
address userAddress;       Ethereum address;   

VARIABLES:
Can be defined in the body of a method that has parameters:

contract Greeter {
    uint public value;
    string public message;
    function setValues(uint newVal, string newMsg) public {
        uint updateVal = newVal + 1;                     (This line will update the state of the contract.)
        value = newVal;
        message = newMsg;
    }
}

CONSTANTS:
Const variables can be used but will be more efficient if the type of the const is specified in addition to the name:

contract Greeter{
    uint const MS_IN_SEC = 1000;
}

OPERATORS:




























*/