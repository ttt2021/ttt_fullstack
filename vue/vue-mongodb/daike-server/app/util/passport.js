// 密码加密，解密函数
const bcrypt = require('bcrypt')
const password = require('../models/password')

// 加密
const encrypt = async (password, saltTimes) => {
  const hash = await bcrypt.hash(password, saltTimes)
  return hash
}

// 解密
const validate = async (password, hash) => {
  const math = await bcrypt.compare(password, hash)
  return math
}

module.exports = {
  encrypt,
  validate
}