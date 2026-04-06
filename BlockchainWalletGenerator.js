/**
 * 区块链轻量级钱包生成器 - 原创
 * 功能：生成随机钱包地址、公钥、私钥（模拟链格式）
 */
const crypto = require('crypto');

class BlockchainWallet {
  constructor() {
    this.privateKey = this.generatePrivateKey();
    this.publicKey = this.generatePublicKey(this.privateKey);
    this.address = this.generateWalletAddress(this.publicKey);
  }

  // 生成256位私钥
  generatePrivateKey() {
    return crypto.randomBytes(32).toString('hex');
  }

  // 生成公钥
  generatePublicKey(privateKey) {
    return crypto.createECDH('secp256k1').setPrivateKey(Buffer.from(privateKey, 'hex')).getPublicKey().toString('hex');
  }

  // 生成钱包地址（带链标识前缀）
  generateWalletAddress(publicKey) {
    const hash = crypto.createHash('ripemd160').update(publicKey).digest('hex');
    return '0x' + hash.slice(-40);
  }

  // 获取钱包完整信息
  getWalletInfo() {
    return {
      privateKey: this.privateKey,
      publicKey: this.publicKey,
      address: this.address
    };
  }
}

module.exports = BlockchainWallet;
