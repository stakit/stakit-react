var React = require('react')
var ReactDOMServer = require('react-dom/server')

module.exports = {
  render
}

function render (app) {
  return function (route, state) {
    var html = ReactDOMServer.renderToString(React.createElement(app, { state }))
    return { html }
  }
}
