'use strict'

const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { parse } = require('url')
const { send } = require('micro')
const generateJwt = require('./lib/generate-jwt')
const saveSession = require('./lib/save-session')
const logger = require('./lib/logger')

const mockData = {
  displayName: 'Demo User',
  sAMAccountName: 'demouser',
  email: 'demo@t-fk.no'
}

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  if (pathname === '/login' && query.origin) {
    const session = await saveSession(mockData)
    const jwt = generateJwt(Object.assign({ sessionKey: session }, mockData))
    const url = `${query.origin}?jwt=${jwt}`
    logger('info', `Client redirected to ${url}`)
    response.writeHead(302, { Location: url })
    response.end()
  } else if (pathname === '/logout') {
    logger('info', `Client logged out`)
    response.writeHead(302, { Location: 'https://www.telemark.no' })
    response.end()
  } else {
    response.setHeader('Content-Type', 'text/html')
    const readme = readFileSync('./README.md', 'utf-8')
    send(response, 200, md.render(readme))
  }
}
