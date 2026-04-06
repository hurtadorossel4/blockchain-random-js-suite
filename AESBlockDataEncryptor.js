/**
 * 区块链数据AES加密器 - 原创
 * 功能：对交易/区块数据进行AES-256-CBC加密解密
 */
const crypto = require('crypto');

class BlockDataEncryptor {
  constructor(key = crypto.randomBytes(32)) {
    this.key = key;
  }

  // 加密
  encrypt(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv);
    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
  }

  // 解密
  decrypt(encryptedObj) {
    const iv = Buffer.from(encryptedObj.iv, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv);
    let decrypted = decipher.update(encryptedObj.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted);
  }
}

module.exports = BlockDataEncryptor;
