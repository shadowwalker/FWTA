const functions = require('firebase-functions')

let indexPage
let errorPage

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'IndexPage') {
  if (!indexPage) indexPage = require('./pages/index')
  exports['IndexPage'] = functions.https.onRequest((req, res) => indexPage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'ErrorPage') {
  if (!errorPage) errorPage = require('./pages/_error')
  exports['ErrorPage'] = functions.https.onRequest((req, res) => errorPage.render(req, res))
}
