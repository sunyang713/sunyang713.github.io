import { createElement } from 'react'
import { render, hydrate } from 'react-dom'
import { withRouter, withStoreProvider } from './enhancers'
import { compose } from 'utils/compose'

import app from '<app>'

var app = 

/**
 * Wrapper for the app
 * Not really right, but w/e.
 */
export class Application {

  constructor(source) {
    this.source = source
  }

  start() {
    const enhance = compose(withStoreProvider)
    const Root = enhance(app)
    const RootElement = createElement(Root)
    this.render()
  }

  restart() {
    this.render()
  }

  render(RootElement, source) {
    render(RootElement, document.getElementById(this.source))
  }

}
