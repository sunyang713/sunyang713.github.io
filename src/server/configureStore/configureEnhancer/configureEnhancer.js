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
