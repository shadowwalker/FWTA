const functions = require('firebase-functions')

let indexPage
let explorePage
let newPage
let feedPage
let mePage
let errorPage

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'IndexPage') {
  if (!indexPage) indexPage = require('./pages/index')
  exports['IndexPage'] = functions.https.onRequest((req, res) => indexPage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'ExplorePage') {
  if (!explorePage) explorePage = require('./pages/explore')
  exports['ExplorePage'] = functions.https.onRequest((req, res) => explorePage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'NewPage') {
  if (!newPage) newPage = require('./pages/new')
  exports['NewPage'] = functions.https.onRequest((req, res) => newPage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'FeedPage') {
  if (!feedPage) feedPage = require('./pages/feed')
  exports['FeedPage'] = functions.https.onRequest((req, res) => feedPage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'MePage') {
  if (!mePage) mePage = require('./pages/me')
  exports['MePage'] = functions.https.onRequest((req, res) => mePage.render(req, res))
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'ErrorPage') {
  if (!errorPage) errorPage = require('./pages/_error')
  exports['ErrorPage'] = functions.https.onRequest((req, res) => errorPage.render(req, res))
}
