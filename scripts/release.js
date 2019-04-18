const path = require('path')
const cpy = require('cpy')

cpy(['static/**/*'], path.resolve(__dirname, '..', 'dist/public/_next'), { cwd: 'src/app/.next', parents: true })
cpy(['static/**/*'], path.resolve(__dirname, '..', 'dist/public'), { cwd: 'src/app', parents: true })
cpy(['pages/**/*'], path.resolve(__dirname, '..', 'dist/functions'), { cwd: 'src/app/.next/serverless', parents: true })
cpy(['functions/**/*'], path.resolve(__dirname, '..', 'dist'), { cwd: 'src', parents: true })
cpy(['package.json'], path.resolve(__dirname, '..', 'dist/functions'), { parents: true })
