import { Store } from 'app/store'
import { configureReducer } from './configureReducer'
import { configurePreloadedState } from './configurePreloadedState'
import { configureEnhancer } from './configureEnhancer'
// import { StateStorage } from './LocalStorage'

/**
 * Configure the application store.
 */
export function configureStore() {

  // Get the application store reducer.
  const reducer = configureReducer()

  // Get the preloaded application state.
  const preloadedState = configurePreloadedState()

  // Get the application store enhancer.
  const enhancer = configureEnhancer()

  // Initialize a hydrated Redux store.
  const store = new Store({
    reducer,
    preloadedState,
    enhancer
  })

  // rxjs?

  // Initialize the peristent state storage.
  // const StateStorage = new StateStorage(store)

  // Persist state to localStorage
  // store.subscribe(StateStorage.saveState) // should throttle.
  /* store config ... */
  /* local storage stuff w/ throttle */

  // Activate Hot Module Replacement - replace reducers.
  if (module.hot) {
    module.hot.accept('app/store/modules', () => store.replaceReducer(reducer)) // probably won't work
  }

  return store

}
