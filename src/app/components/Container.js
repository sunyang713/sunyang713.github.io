import React from 'react'
import { is } from 'immutable'


/**
 * Optimized for Immutable.js.
 */
export function connectImmutable({ mapStateToProps, mapDispatchToProps }) {

  function enhancer(Component) {

    let Container = props => <Component { ...toJS(props) } />

    return connect(
      mapStateToProps,
      mapDispatchToProps,
      null,
      { areStatesEqual: (next, prev) => is(next, prev) }
    )(Container)

  }

  return enhancer
}

/* One line. */
export const container = ({ mapStateToProps, mapDispatchToProps }) => Component => connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { areStatesEqual: (next, prev) => is(next, prev) }
)(props => <Component { ...toJS(props) } />)


export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1
​
  const propsJS = Object.entries(wrappedComponentProps)
    .reduce((newProps, wrappedComponentProp) => Object.assign(
      newProps,
      wrappedComponentProp[KEY]: Iterable.isIterable(wrappedComponentProp[VALUE]) ?
        wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    )
    {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE]) ?
        wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    return newProps
  }, {})
​
  return <WrappedComponent {...propsJS} />
}



