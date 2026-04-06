/**
 * 高强度随机私钥生成器 - 原创
 * 功能：生成secp256k1曲线兼容的区块链私钥
 */
const crypto = require('crypto');

class SecurePrivateKey {
  generate() {
    // secp256k1私钥范围：1 ~ n-1
    const n = BigInt('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141');
    let privateKey;
    do {
      privateKey = BigInt('0x' + crypto.randomBytes(32).toString('hex'));
    } while (privateKey >= n || privateKey <= 0);
    return privateKey.toString(16).padStart(64, '0');
  }

  // 批量生成
  batchGenerate(count = 5) {
    return Array.from({ length: count }, () => this.generate());
  }
}

module.exports = SecurePrivateKey;
