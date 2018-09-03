import { combineReducers } from 'redux'
import { tstReducer } from 'app/store/modules/Tst'

export function configureReducer() {
  // Get the rootReducer.
  const rootReducer = combineReducers({
    tstReducer
  })

  return rootReducer
}
