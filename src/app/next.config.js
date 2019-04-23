const dotenv = require('dotenv').config()
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  env: dotenv.error ? {} : dotenv.parsed,
  target: 'serverless'
})
