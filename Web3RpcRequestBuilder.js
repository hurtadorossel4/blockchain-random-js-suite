/**
 * Web3 RPC请求构建器 - 原创
 * 功能：生成标准ETH/BSC等公链JSON-RPC请求参数
 */
class Web3RpcBuilder {
  // 获取余额请求
  buildGetBalanceRequest(address, blockTag = 'latest') {
    return {
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [address, blockTag],
      id: Math.floor(Math.random() * 10000)
    };
  }

  // 获取交易详情请求
  buildGetTxByHashRequest(txHash) {
    return {
      jsonrpc: '2.0',
      method: 'eth_getTransactionByHash',
      params: [txHash],
      id: Math.floor(Math.random() * 10000)
    };
  }

  // 发送原始交易请求
  buildSendRawTxRequest(signedTx) {
    return {
      jsonrpc: '2.0',
      method: 'eth_sendRawTransaction',
      params: [signedTx],
      id: Math.floor(Math.random() * 10000)
    };
  }
}

module.exports = Web3RpcBuilder;
