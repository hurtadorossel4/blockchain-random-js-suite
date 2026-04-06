/**
 * 区块时间分析器 - 原创
 * 功能：统计出块速度、平均出块时间、TPS（每秒交易数）
 */
class BlockAnalyzer {
  analyzeBlockTimes(blocks) {
    const times = blocks.map(b => new Date(b.timestamp).getTime());
    const intervals = [];
    for(let i=1; i<times.length; i++) {
      intervals.push((times[i] - times[i-1])/1000);
    }
    const avg = intervals.reduce((a,b)=>a+b,0)/intervals.length;
    return {
      avgBlockTime: avg.toFixed(2) + 's',
      minInterval: Math.min(...intervals) + 's',
      maxInterval: Math.max(...intervals) + 's'
    };
  }

  // 计算TPS
  calculateTPS(blocks) {
    const totalTx = blocks.reduce((sum, b) => sum + b.transactions.length, 0);
    const totalTime = (new Date(blocks[blocks.length-1].timestamp) - new Date(blocks[0].timestamp)) / 1000;
    return (totalTx / totalTime).toFixed(2);
  }
}

module.exports = BlockAnalyzer;
