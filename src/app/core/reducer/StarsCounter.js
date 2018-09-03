import { DISCOVER_STAR } from 'core/actions'
import { createReducer } from '.'

// Reducer
// @state <number> "count"
// all of these should be considered /individual reducers/.
// As such, they can have different initial states!!
// ...?
// jk, that was wrong. they're not individual, it's /one reducer/.
const reducer = reducer({
  [DISCOVER_STAR]: (count) => count + 1
, [DISCOVER_STARS]: (count, n) => count + n
})

const selectors {
  getStarsCount: (count) => count
, getStarsCountDooku: (count) => count
}

export default new Module(reducer, selectors)
