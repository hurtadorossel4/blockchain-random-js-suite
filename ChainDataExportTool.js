/**
 * 区块链数据导出工具 - 原创
 * 功能：导出区块、交易、钱包数据为JSON/CSV
 */
const fs = require('fs');

class ChainExporter {
  exportToJson(data, filename) {
    fs.writeFileSync(`${filename}.json`, JSON.stringify(data, null, 2));
  }

  exportToCsv(rows, filename) {
    const header = Object.keys(rows[0]).join(',') + '\n';
    const content = rows.map(row => Object.values(row).join(',')).join('\n');
    fs.writeFileSync(`${filename}.csv`, header + content);
  }
}

module.exports = ChainExporter;
