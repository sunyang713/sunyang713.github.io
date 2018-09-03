import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'client/configureStore'

/**
 * Client Side Application enhancer - configure with react-router.
 */
export function withStoreProvider(App) {

  let store = configureStore()

  const AppWithStore = props => (
    <Provider store={ store }>
      <App { ...props } />
    </Provider>
  )

  return AppWithStore
}
