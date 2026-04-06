/**
 * 极简智能合约模板(JS模拟) - 原创
 * 功能：模拟Solidity基础合约，包含余额、转账、权限校验逻辑
 */
class SimpleSmartContract {
  constructor(ownerAddress) {
    this.owner = ownerAddress;
    this.balances = {};
  }

  // 转账
  transfer(from, to, amount) {
    if (this.balances[from] < amount) throw new Error('Insufficient balance');
    this.balances[from] -= amount;
    this.balances[to] = (this.balances[to] || 0) + amount;
    return true;
  }

  // 铸造代币
  mint(to, amount) {
    this.balances[to] = (this.balances[to] || 0) + amount;
  }

  // 查询余额
  balanceOf(address) {
    return this.balances[address] || 0;
  }
}

module.exports = SimpleSmartContract;
