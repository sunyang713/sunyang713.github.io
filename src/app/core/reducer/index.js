// a state-slice need metadata?
// like loading/fetching/processing or error. nope! just save as promise! (????)

// reducers are semantic too.
import { combineReducers } from 'redux'
import * as StarsCounter from './StarsCounter'
import * as User from './User'

export const { rootReducer, selectors } = combineModules({
  StarsCounter,
  User
})


















// Immutable??
function combineModules(modules) {

  const reducers = {}
  const selectors = {}

  Object.entries(modules).forEach(module => {
    const moduleName = module[0]
    const moduleReducer = module[1].reducer
    const moduleSelectors = module[1].selectors

    // Add Reducer to final reducers.
    reducers[moduleName] = moduleReducer

    // Namespace (baseline?) selectors
    Object.entries(moduleSelectors).forEach((selector) => {
      const selectorName = selector[0]
      const selectorFunction = selector[1]

      selectors[selectorName] = (state, ...args) => selectorFunction(state[moduleName], ...args)
    })

  })

  const rootReducer = combineReducers(reducers)

  return { rootReducer, selectors }
}





















import Immutable from 'immutable'

export default (reducers, getDefaultState) {
  const reducerKeys = Object.keys(reducers)

  return (inputState, action) {
    return inputState.withMutations((temporaryState) => {
      reducerKeys.forEach((reducerName) => {
        const reducer = reducers[reducerName]
        const currentDomainState = temporaryState.get(reducerName)
        const nextDomainState = reducer(currentDomainState, action)

        validateNextState(nextDomainState, reducerName, action)

        temporaryState.set(reducerName, nextDomainState)
      })
    })
  }
}

