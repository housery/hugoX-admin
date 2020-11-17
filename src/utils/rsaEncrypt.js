import JSEncrypt from 'jsencrypt/bin/jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPX1rR0BFpJxDHODc+2/IALF/V\n' +
  'MID/Abi1/H8FEYeHaL68TB+/emXR3v41w8jsW071BEmovExrXhNuM1Ca1X74RXTq\n' +
  '/gcBI7rMwkiEwZlHcKplnLjBS9vc2tlNRD1WAfUFwerkMdoro9sK4g/W5cH6b8D/\n' +
  'bxYkpzDyh/lwLCFiOQIDAQAB'

// 前端待删除私钥，私钥放后端
const privateKey = ''

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(txt)
}

