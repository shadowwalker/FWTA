const functions = require('firebase-functions')
const indexPage = require('./next/serverless/pages/index')

exports.App = functions.https.onRequest((req, res) => indexPage.render(req, res))
