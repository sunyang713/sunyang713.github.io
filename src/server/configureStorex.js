import { Store } from 'app/store'

/**
 * Configure and return a 
 */
export function configureStore() {

  // Define the initial store state.
  const preloadedState = {}

  /* initial state config ... */

  // Initialize the Redux store.
  const store = new ReduxStore(preloadedState)

  /* store config ... */

  // Return the store.
  return store
}
