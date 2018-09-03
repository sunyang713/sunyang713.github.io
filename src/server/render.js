import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

/**
 * Render a given React Component to a string. also location & context
 */
export default function render({ App, location, context }) {
  return renderToString(
    <StaticRouter location={ location } context={ context }>
      <App />
    </StaticRouter>
  )
}
