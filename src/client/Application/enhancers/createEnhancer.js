import React, { Component } from 'react'


/*
 * @Enhancement is just a React component.
 */
export function createEnhancer(Enhancement, ...enhancementProps) {

  const enhance = Component => {
    const EnhancedComponent = props => (
      <Enhancement { ...enhancementProps }>
        <Component { ...props } />
      </Enhancement>
    )
    EnhancedComponent.displayName = `${ Enhancement.name }(${ WrappedComponent.displayName || WrappedComponent.name || 'Component' })`
  }

  return enhance
}
