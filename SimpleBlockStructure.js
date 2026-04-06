/**
 * 极简区块链区块结构 - 原创
 * 功能：定义标准区块格式，包含索引、时间戳、交易、哈希、前哈希、随机校验位
 */
class SimpleBlock {
  constructor(index, previousHash, transactions, difficulty = 2) {
    this.index = index;
    this.timestamp = new Date().toISOString();
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.difficulty = difficulty;
    this.nonce = Math.floor(Math.random() * 1000000); // 随机随机数
    this.hash = this.calculateBlockHash();
  }

  // 计算区块哈希
  calculateBlockHash() {
    const data = this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce;
    return require('crypto').createHash('sha256').update(data).digest('hex');
  }

  // 工作量证明校验
  proofOfWorkCheck() {
    return this.hash.startsWith('0'.repeat(this.difficulty));
  }
}

module.exports = SimpleBlock;
