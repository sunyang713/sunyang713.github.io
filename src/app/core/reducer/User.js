import { DISCOVER_STAR, RETRIEVE_USER, RECEIVE_USER } from 'core/actions'
import { createReducer } from '.'

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
  color: null
}

// Reducer
// @state <object> "user"
export const reducer = createReducer({
  [RETRIEVE_USER]: () => initialState
, [RECEIVE_USER]: (user, new) => ({ ...user, ...new })
, [DISCOVER_STAR]: (user) => ({ ..user, color: 'gold' })
})(initialState)

export const selectors {
  getFirstName: (user) => user.firstName
, getLastName: (user) => user.lastName
, getUserName: (user) => user.userName
, getColor: (user) => user.color
, getName: (user) => `${ user.firstName } ${ user.lastName }`
}
