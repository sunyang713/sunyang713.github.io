import React from 'react'
import { BrowserRouter } from 'react-router-dom'

/**
 * Client Side Application enhancer - configure with react-router.
 */
export function withRouter(App) {

  const AppWithRouter = props => (
    <BrowserRouter>
      <App { ...props } />
    </BrowserRouter>
  )

  return AppWithRouter

}
