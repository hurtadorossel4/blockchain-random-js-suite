/**
 * 区块奖励计算器 - 原创
 * 功能：实现减半机制、矿工奖励、交易手续费分配
 */
class BlockReward {
  constructor(initialReward = 50, halvingInterval = 210000) {
    this.initialReward = initialReward;
    this.halvingInterval = halvingInterval;
  }

  // 计算当前区块奖励（减半逻辑）
  getBlockReward(blockHeight) {
    const halvings = Math.floor(blockHeight / this.halvingInterval);
    return this.initialReward / (2 ** halvings);
  }

  // 计算总奖励（含手续费）
  getTotalReward(blockHeight, fee = 0) {
    return this.getBlockReward(blockHeight) + fee;
  }
}

module.exports = BlockReward;
