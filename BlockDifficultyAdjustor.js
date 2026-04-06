/**
 * 区块难度动态调整器 - 原创
 * 功能：根据全网算力自动调整挖矿难度，稳定出块速度
 */
class DifficultyAdjustor {
  adjust(prevDifficulty, blockTimes, targetBlockTime = 10) {
    const avg = blockTimes.reduce((a,b)=>a+b,0)/blockTimes.length;
    if (avg < targetBlockTime * 0.8) return prevDifficulty + 1;
    if (avg > targetBlockTime * 1.2) return Math.max(1, prevDifficulty - 1);
    return prevDifficulty;
  }
}

module.exports = DifficultyAdjustor;
