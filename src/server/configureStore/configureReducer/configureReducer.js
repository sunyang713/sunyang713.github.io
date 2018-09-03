import { combineReducers } from 'redux'
import { reducers } from 'app/store/reducers'
// import { tstReducer } from 'app/store/modules/Tst'

export function configureReducer() {
  // Get the rootReducer.
  const rootReducer = combineReducers(reducers)

  return rootReducer
}
