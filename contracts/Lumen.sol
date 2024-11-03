// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Lumen {
    string public name = "Lumen";
    string public symbol = "LMN";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000 * 10 ** 18;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public _balanceOf;
    mapping(address => mapping(address => uint256)) public _allowance;

    constructor() {
        _balanceOf[msg.sender] = totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return _balanceOf[_owner];
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf(msg.sender) >= _value, "Insufficient balance");
        _balanceOf[msg.sender] -= _value;
        _balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {
        _allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(
        address _owner,
        address _spender
    ) public view returns (uint256) {
        return _allowance[_owner][_spender];
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool) {
        require(balanceOf(_from) >= _value, "Insufficient balance");
        require(
            allowance(_from, msg.sender) >= _value,
            "Insufficient allowance"
        );
        _balanceOf[_from] -= _value;
        _allowance[_from][msg.sender] -= _value;
        _balanceOf[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
