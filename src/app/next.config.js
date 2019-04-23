const dotenv = require('dotenv').config()
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')

module.exports = withPWA(withTypescript({
  env: dotenv.error ? {} : dotenv.parsed,
  target: 'serverless'
}))
