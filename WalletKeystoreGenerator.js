/**
 * 钱包加密Keystore生成器 - 原创
 * 功能：生成以太坊标准加密keystore文件，保护私钥
 */
const crypto = require('crypto');

class KeystoreCreator {
  generateKeystore(privateKey, password) {
    const salt = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256');
    
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(privateKey, 'hex', 'hex');
    encrypted += cipher.final('hex');

    return {
      version: 1,
      crypto: {
        cipher: 'aes-256-cbc',
        cipherparams: { iv: iv.toString('hex') },
        ciphertext: encrypted,
        kdf: 'pbkdf2',
        kdfparams: { salt: salt.toString('hex'), iterations: 100000, keylen: 32, hash: 'sha256' },
        mac: crypto.createHash('sha256').update(Buffer.concat([key.slice(16), Buffer.from(encrypted, 'hex')])).digest('hex')
      },
      address: '0x' + crypto.createHash('ripemd160').update(privateKey).digest('hex').slice(-40)
    };
  }
}

module.exports = KeystoreCreator;
