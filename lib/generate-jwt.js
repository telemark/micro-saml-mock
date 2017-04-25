'use strict'

const config = require('../config')
const jwt = require('jsonwebtoken')
const encryptor = require('simple-encryptor')(config.SAML_ENCRYPTOR_SECRET)

module.exports = data => {
  const tokenData = {
    data: encryptor.encrypt({
      userName: data.displayName || data.cn,
      userId: data.sAMAccountName || data.uid || '',
      session: data.sessionKey
    })
  }
  const token = jwt.sign(tokenData, config.SAML_JWT_SECRET, config.jwtTokenOptions)

  return token
}
