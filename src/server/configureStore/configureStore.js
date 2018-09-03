import { Store } from 'app/store'
import { configureReducer } from './configureReducer'
// import { configurePreloadedState } from './configurePreloadedState'
// import { configureEnhancer } from './configureEnhancer'
// import { StateStorage } from './LocalStorage'

/**
 * Configure the application store.
 */
export function configureStore() {

  // Get the application store reducer.
  const reducer = configureReducer()

  // Get the preloaded application state.
  // const preloadedState = configurePreloadedState()

  // Get the application store enhancer.
  // const enhancer = configureEnhancer()

  // Initialize a hydrated Redux store.
  const store = new Store({
    reducer
  })

  // rxjs?

  return store

}
