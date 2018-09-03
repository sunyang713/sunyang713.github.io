// Receives an object mapping a 'slice' to a reducer and selectors.
// Returns a rootReducer and hoisted selectors.
// Need Immutable.js version of this too.
export function reducer(handlers) {
  return initialState =>
    (state = initialState, action) =>
      handlers.hasOwnProperty(action.type) ?
        handlers[action.type](state, ...action.payload)
      : state
}
