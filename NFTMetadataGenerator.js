/**
 * NFT随机元数据生成器 - 原创
 * 功能：生成ERC721标准NFT元数据，含随机属性、图片、名称
 */
class NFTMetadataCreator {
  generateRandomMetadata(tokenId) {
    const traits = ['Common', 'Rare', 'Epic', 'Legendary'];
    const colors = ['Red', 'Blue', 'Green', 'Gold', 'Black'];
    return {
      name: `Random NFT #${tokenId}`,
      description: 'Original Blockchain NFT Collection',
      image: `ipfs://Qm${require('crypto').randomBytes(24).toString('hex')}`,
      attributes: [
        { trait_type: 'Rarity', value: traits[Math.floor(Math.random()*traits.length)] },
        { trait_type: 'Color', value: colors[Math.floor(Math.random()*colors.length)] },
        { trait_type: 'Power', value: Math.floor(Math.random()*100) }
      ],
      tokenId
    };
  }

  // 批量生成NFT元数据
  batchGenerateMetadata(count = 10) {
    return Array.from({ length: count }, (_, i) => this.generateRandomMetadata(i+1));
  }
}

module.exports = NFTMetadataCreator;
