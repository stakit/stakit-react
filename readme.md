# stakit-react
React renderer for Stakit

<a href="https://www.npmjs.com/package/stakit-react">
  <img src="https://img.shields.io/npm/v/stakit-react.svg?style=flat-square" alt="NPM version"/>
</a>

## Installation
```
npm i stakit-react
```

## Example
```javascript
var stakit = require('stakit')
var { render } = require('stakit-react')

var app = require('./app')

stakit()
  .use(stakit.state({ name: 'world' }))
  .routes(() => ['/'])
  .render(render(app))
  .output()
```

## API
### `stakitReact.render(App)`
Returns a Stakit renderer. `App` will get the state as `props.state`.
