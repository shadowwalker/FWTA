const functions = require('firebase-functions')
const indexPage = require('./pages/index')
const errorPage = require('./pages/_error')

exports.IndexPage = functions.https.onRequest((req, res) => indexPage.render(req, res))
exports.ErrorPage = functions.https.onRequest((req, res) => errorPage.render(req, res))
