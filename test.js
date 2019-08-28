var test = require('tape')
var React = require('react')
var { render } = require('.')

test('render - returns a renderer function', function (t) {
  t.plan(3)

  var fn = render(App)
  t.ok(typeof fn === 'function', 'is a function')

  var res = fn('/', { name: 'world' })
  t.ok(typeof res === 'object', 'renderer returns an object')
  t.ok(typeof res.html === 'string', 'res.html is a string')
})

test('render - rendering works', function (t) {
  t.plan(1)

  var HTML_RESULT = '<body data-reactroot=""><h1>Hello world!</h1></body>'

  var fn = render(App)
  var { html } = fn('/test', { name: 'world' })

  t.ok(html.trim() === HTML_RESULT.trim(), 'html is correct')
})

function App (props) {
  return React.createElement('body', null,
    React.createElement('h1', null, `Hello ${props.state.name}!`)
  )
}
