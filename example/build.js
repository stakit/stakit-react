var stakit = require('stakit')
var { render } = require('..')

var app = require('./app')

stakit()
  .use(stakit.state({ name: 'world' }))
  .routes(() => ['/'])
  .render(render(app))
  .output()
