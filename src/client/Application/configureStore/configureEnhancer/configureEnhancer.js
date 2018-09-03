import { applyMiddleware } from 'redux'
import { functionMiddleware } from 'app/store/middleware'
// import DevTools from 'app/components/DevTools'
// import { getDebugSessionKey } from './getDebugSessionKey'
// import { persistState } from 'redux-devtools'
import { compose } from 'utils/compose'

export function configureEnhancer() {
  // Compose the Store enhancer.
  const enhancer = compose(
    applyMiddleware(functionMiddleware),
    // DevTools.instrument(), // impure, implicitly couples 'react' tech with this store.
    // persistState(getDebugSessionKey())
  )

  return enhancer
}

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return (matches && matches.length > 0) ?
    matches[1]
  : null
}

// persist if user opts-in