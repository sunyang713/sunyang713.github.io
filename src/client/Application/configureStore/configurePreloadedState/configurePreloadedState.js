import { fromJS } from 'immutable'

export function configurePreloadedState() {
  // Extract the store's preloaded state—this global variable is injected in the server-generated HTML.
  // webpack config this?
  const preloadedState = window.__PRELOADED_STATE__

  // Remove the pre-loaded state from the `window` object—allow the passed state to be garbage-collected.
  delete window.__PRELOADED_STATE__

  return fromJS(preloadedState)
}
