var React = require('react')

module.exports = function (props) {
  return React.createElement('body', null,
    React.createElement('h1', null, `Hello ${props.state.name}!`)
  )
}
