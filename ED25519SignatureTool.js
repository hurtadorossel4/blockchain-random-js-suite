/**
 * ED25519椭圆曲线签名工具 - 原创
 * 功能：高性能区块链签名验签，适配联盟链/私链
 */
const crypto = require('crypto');

class ED25519Signer {
  generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');
    return {
      publicKey: publicKey.export({ type: 'spki', format: 'hex' }),
      privateKey: privateKey.export({ type: 'pkcs8', format: 'hex' })
    };
  }

  sign(data, privateKeyHex) {
    const privateKey = crypto.createPrivateKey({
      key: Buffer.from(privateKeyHex, 'hex'),
      format: 'der',
      type: 'pkcs8'
    });
    return crypto.sign(null, Buffer.from(data), privateKey).toString('hex');
  }

  verify(data, signature, publicKeyHex) {
    const publicKey = crypto.createPublicKey({
      key: Buffer.from(publicKeyHex, 'hex'),
      format: 'der',
      type: 'spki'
    });
    return crypto.verify(null, Buffer.from(data), publicKey, Buffer.from(signature, 'hex'));
  }
}

module.exports = ED25519Signer;
