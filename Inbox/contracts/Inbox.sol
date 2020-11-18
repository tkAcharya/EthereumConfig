pragma solidity ^0.4.17;

contract Inbox {

    string public message;

    function Inbox(string localMessage) public {
        message=localMessage;
    }

    function setMessage(string localMessage) public {
        message=localMessage;
    }

}
