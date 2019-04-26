const dotenv = require('dotenv').config()
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')

if (dotenv.error) {
  throw Error(dotenv.error)
}

module.exports = withPWA(withTypescript({
  env: dotenv.parsed,
  target: 'serverless'
}))
