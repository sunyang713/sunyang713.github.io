const REDUX_STATE_KEY = 'state'

export default class Storage() {

  constructor(store) {
    this.storage = window.localStorage
    this.store = store
  }

  saveState() {
    try {
      const serializedState = JSON.stringify(store.getState());
      this.storage.setItem(REDUX_STATE_KEY, serializedState);
      return Promise.resolve(null)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  }

  loadState() {
    try {
      const serializedState = this.storage.getItem(REDUX_STATE_KEY)
      const state = serializedState ? JSON.parse(serializedState) : null
      return Promise.resolve(state)
    } catch (error) {
      console.error(error)
      return Promise.reject(null)
    }
  }

}
