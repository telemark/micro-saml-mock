'use strict'

module.exports = {
  jwtTokenOptions: {
    expiresIn: '1h',
    issuer: 'https://auth.t-fk.no'
  },
  SAML_YAR_SECRET: process.env.SAML_YAR_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  SAML_ENCRYPTOR_SECRET: process.env.SAML_ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SAML_JWT_SECRET: process.env.SAML_JWT_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  SESSION_STORAGE_URL: process.env.SESSION_STORAGE_URL || 'https://tmp.storage.tjeneste.win',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'micro-saml-mock',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
