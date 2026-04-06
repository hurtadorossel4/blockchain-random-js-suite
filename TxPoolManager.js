/**
 * 交易池管理器 - 原创
 * 功能：管理待打包交易、按Gas费排序、剔除无效交易
 */
class TxPool {
  constructor() {
    this.pendingTxs = [];
  }

  // 添加交易到池
  addTransaction(tx) {
    this.pendingTxs.push(tx);
    this.sortByGasPrice();
  }

  // 按Gas费降序排序
  sortByGasPrice() {
    this.pendingTxs.sort((a,b) => b.gasPrice - a.gasPrice);
  }

  // 获取待打包交易
  getPackableTxs(maxCount = 10) {
    return this.pendingTxs.slice(0, maxCount);
  }

  // 清除已打包交易
  removePackedTxs(txHashes) {
    this.pendingTxs = this.pendingTxs.filter(tx => !txHashes.includes(tx.hash));
  }
}

module.exports = TxPool;
